import ButtonBack from "@atoms/ButtonBack";
import Card from "@atoms/Card";
import Header from "@atoms/Header";
import CardController from "@molecules/CardController";
import Menu from "@molecules/Menu";
import { FC, useCallback, useMemo, useRef, useState } from "react";
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
}) => {
	const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
	const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
	const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
	const textRef = useRef<HTMLParagraphElement>(null);

	const shuffleArray = (array) => {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

	const allLevels = useMemo(() => {
		const levelsMap: { [key: string]: string[] } = {};

		selectedDecks.forEach((deckId) => {
			const deck = decks.find((m) => m.short_name === deckId);
			if (deck) {
				Object.keys(deck.questions).forEach((level, idx) => {
					if (!levelsMap[idx]) {
						levelsMap[idx] = [];
					}
					levelsMap[idx] = levelsMap[idx].concat(deck.questions[level]);
				});
			}
		});

		Object.keys(levelsMap).forEach((level) => {
			levelsMap[level] = shuffleArray(levelsMap[level]);
		});

		return Object.values(levelsMap).filter((level) => level.length > 0);
	}, [selectedDecks, decks]);

	const currentLevelCards = allLevels[currentLevelIndex] || [];

	const nextCard = () => {
		if (currentCardIndex < currentLevelCards.length - 1) {
			setCurrentCardIndex((prev) => prev + 1);
			setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
		} else if (currentLevelIndex < allLevels.length - 1) {
			nextLevel();
		}
	};

	const prevCard = useCallback(() => {
		if (currentCardIndex > 0) {
			setCurrentCardIndex((prev) => prev - 1);
			setCurrentPlayerIndex(
				(prev) => (prev - 1 + players.length) % players.length
			);
		} else if (currentLevelIndex > 0) {
			prevLevel();
		}
	}, []);

	const nextLevel = useCallback(() => {
		if (currentLevelIndex < allLevels.length - 1) {
			setCurrentLevelIndex((prev) => prev + 1);
			setCurrentCardIndex(0);
			setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
		}
	}, []);

	const prevLevel = () => {
		if (currentLevelIndex > 0) {
			setCurrentLevelIndex((prev) => prev - 1);
			setCurrentCardIndex(allLevels[currentLevelIndex - 1].length - 1);
			setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
		}
	};

	return (
		<div className="flex items-center justify-center h-full">
			<ButtonBack prevStep={prevStep} theme={theme} />
			<div className="m-auto tablet:w-[80%] w-full">
				<Header player={players[currentPlayerIndex]} theme={theme} />
				<Card textRef={textRef} theme={theme}>
					{currentLevelCards[currentCardIndex]}
				</Card>
				<CardController
					theme={theme}
					previousCard={prevCard}
					nextCard={nextCard}
					previousLevel={prevLevel}
					nextLevel={nextLevel}
					level={currentLevelIndex + 1}
					curr={currentCardIndex + 1}
					tot={currentLevelCards.length}
					disablePrev={currentCardIndex === 0}
					disablePrevLevel={currentLevelIndex === 0}
					disableNext={currentCardIndex === currentLevelCards.length - 1}
					disableNextLevel={currentLevelIndex === allLevels.length - 1}
				/>
				<Menu
					textRef={currentLevelCards[currentCardIndex]}
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
