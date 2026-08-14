import ButtonBack from "@atoms/ButtonBack";
import Card from "@atoms/Card";
import Header from "@atoms/Header";
import CardController from "@molecules/CardController";
import Menu from "@molecules/Menu";
import { FC, useEffect, useRef } from "react";
import { useGameState } from "../../../hooks/useGameState";
import { CardViewerProps } from "./index.types";

const CardViewer: FC<CardViewerProps> = ({
	setSelectedDecks,
	selectedDecks,
	players,
	decks,
	prevStep,
	setPlayers,
	theme,
	toggleTheme,
	categories,
	isOnline = false,
	roomState,
	isHost,
	updateGameState,
	seed,
}) => {
	const textRef = useRef<HTMLParagraphElement>(null);

	const {
		allLevels,
		currentLevelCards,
		currentCardIndex,
		currentLevelIndex,
		currentPlayerIndex,
		currentCardText,
		isFlipping,
		nextCard,
		prevCard,
		nextLevel,
		prevLevel,
		setIndices,
		canGoNext,
		canGoPrev,
		canGoNextLevel,
		canGoPrevLevel,
	} = useGameState({
		decks,
		selectedDecks,
		players,
		seed,
		isOnline,
	});

	// Online: determine if it's this player's turn
	const isMyTurn = !isOnline || (isOnline && (
		(isHost && currentPlayerIndex === 0) ||
		(!isHost && currentPlayerIndex === 1)
	));

	// Online: sync state from Firebase when remote player advances
	useEffect(() => {
		if (!isOnline || !roomState) return;

		const remoteCard = roomState.currentCardIndex;
		const remoteLevel = roomState.currentLevelIndex;
		const remotePlayer = roomState.currentPlayerIndex;

		if (
			remoteCard !== currentCardIndex ||
			remoteLevel !== currentLevelIndex ||
			remotePlayer !== currentPlayerIndex
		) {
			setIndices(remoteCard, remoteLevel, remotePlayer);
		}
	}, [
		isOnline,
		roomState?.currentCardIndex,
		roomState?.currentLevelIndex,
		roomState?.currentPlayerIndex,
	]);

	// Wrap navigation to sync online
	const handleNextCard = () => {
		if (isOnline && !isMyTurn) return;
		const result = nextCard();
		if (result && isOnline && updateGameState) {
			updateGameState({
				currentCardIndex: result.cardIndex,
				currentLevelIndex: result.levelIndex,
				currentPlayerIndex: result.playerIndex,
			});
		}
	};

	const handlePrevCard = () => {
		if (isOnline && !isMyTurn) return;
		const result = prevCard();
		if (result && isOnline && updateGameState) {
			updateGameState({
				currentCardIndex: result.cardIndex,
				currentLevelIndex: result.levelIndex,
				currentPlayerIndex: result.playerIndex,
			});
		}
	};

	const handleNextLevel = () => {
		if (isOnline && !isMyTurn) return;
		const result = nextLevel();
		if (result && isOnline && updateGameState) {
			updateGameState({
				currentCardIndex: result.cardIndex,
				currentLevelIndex: result.levelIndex,
				currentPlayerIndex: result.playerIndex,
			});
		}
	};

	const handlePrevLevel = () => {
		if (isOnline && !isMyTurn) return;
		const result = prevLevel();
		if (result && isOnline && updateGameState) {
			updateGameState({
				currentCardIndex: result.cardIndex,
				currentLevelIndex: result.levelIndex,
				currentPlayerIndex: result.playerIndex,
			});
		}
	};

	return (
		<div className="flex items-center justify-center h-full">
			<ButtonBack prevStep={prevStep} theme={theme} />
			<div className="m-auto tablet:max-w-[80%] laptop:max-w-[75%] w-full">
				<Header
					player={players[currentPlayerIndex]}
					theme={theme}
					isMyTurn={isOnline ? isMyTurn : undefined}
				/>
				<Card
					textRef={textRef}
					theme={theme}
					isFlipping={isFlipping}
				>
					{currentCardText}
				</Card>
				{isOnline && !isMyTurn && (
					<p className={`${theme} text-center text-contrastText/60 text-xs mt-2 uppercase font-semibold animate-pulse`}>
						Waiting for {players[currentPlayerIndex]} to draw...
					</p>
				)}
				<CardController
					theme={theme}
					previousCard={handlePrevCard}
					nextCard={handleNextCard}
					previousLevel={handlePrevLevel}
					nextLevel={handleNextLevel}
					level={currentLevelIndex + 1}
					curr={currentCardIndex + 1}
					tot={currentLevelCards.length}
					disablePrev={!canGoPrev || (isOnline && !isMyTurn)}
					disablePrevLevel={!canGoPrevLevel || (isOnline && !isMyTurn)}
					disableNext={(!canGoNext && currentLevelIndex >= allLevels.length - 1) || (isOnline && !isMyTurn)}
					disableNextLevel={!canGoNextLevel || (isOnline && !isMyTurn)}
				/>
				<Menu
					textRef={currentCardText}
					decks={decks}
					players={players}
					setSelectedDecks={setSelectedDecks}
					selectedDecks={selectedDecks}
					setPlayers={setPlayers}
					theme={theme}
					toggleTheme={toggleTheme}
					categories={categories}
				/>
			</div>
		</div>
	);
};

export default CardViewer;
