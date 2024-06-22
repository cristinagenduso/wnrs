import ButtonBack from "@atoms/ButtonBack";
import Card from "@atoms/Card";
import Header from "@atoms/Header";
import CardController from "@molecules/CardController";
import Menu from "@molecules/Menu";
import { FC, useMemo, useRef, useState } from "react";
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

	const shuffleArray = (array: string[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
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

	const prevCard = () => {
		if (currentCardIndex > 0) {
			setCurrentCardIndex((prev) => prev - 1);
			setCurrentPlayerIndex(
				(prev) => (prev - 1 + players.length) % players.length
			);
		} else if (currentLevelIndex > 0) {
			prevLevel();
		}
	};

	const nextLevel = () => {
		if (currentLevelIndex < allLevels.length - 1) {
			setCurrentLevelIndex((prev) => prev + 1);
			setCurrentCardIndex(0);
			setCurrentPlayerIndex(0);
		}
	};

	const prevLevel = () => {
		if (currentLevelIndex > 0) {
			setCurrentLevelIndex((prev) => prev - 1);
			setCurrentCardIndex(0);
			setCurrentPlayerIndex(0);
		}
	};

	return (
		<div className="pt-14">
			<ButtonBack prevStep={prevStep} theme={theme} />
			<div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-[80%] w-full">
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
