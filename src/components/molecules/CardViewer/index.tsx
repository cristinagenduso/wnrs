import ButtonBack from "@atoms/ButtonBack";
import Card from "@atoms/Card";
import Header from "@atoms/Header";
import CardController from "@molecules/CardController";
import Menu from "@molecules/Menu";
import { FC, useRef, useState } from "react";
import { CardViewerProps } from "./index.types";

const CardViewer: FC<CardViewerProps> = ({
	setSelectedDecks,
	selectedDecks,
	players,
	decks,
	prevStep,
	setPlayers,
}) => {
	const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
	const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
	const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);

	const levels = [
		"Level 1 Perception",
		"Level 2 Connection",
		"Level 3 Reflection",
		"Final Card",
	];

	const textRef = useRef<HTMLParagraphElement>(null);

	const allCardsByLevel = selectedDecks.flatMap((deckId) => {
		const deck = decks.find((m) => m.short_name === deckId);
		return deck ? deck.questions[currentLevelIndex] : [];
	});

	const nextCard = () => {
		if (currentCardIndex < allCardsByLevel.length - 1) {
			setCurrentCardIndex((prev) => prev + 1);
			setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
		} else if (currentLevelIndex < levels.length - 1) {
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
		if (currentLevelIndex < levels.length - 1) {
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
		<div>
			<ButtonBack prevStep={prevStep} />
			<div>
				<Header player={players[currentPlayerIndex]} />
				<Card textRef={textRef}>{allCardsByLevel[currentCardIndex]}</Card>
			</div>
			<CardController
				previousCard={prevCard}
				nextCard={nextCard}
				previousLevel={prevLevel}
				nextLevel={nextLevel}
				level={currentLevelIndex + 1}
				curr={currentCardIndex + 1}
				tot={allCardsByLevel.length}
				disablePrev={currentCardIndex === 0 && currentLevelIndex === 0}
				disableNext={
					currentCardIndex === allCardsByLevel.length - 1 &&
					currentLevelIndex === levels.length - 1
				}
			/>
			<Menu
				textRef={allCardsByLevel[currentCardIndex]}
				decks={decks}
				players={players}
				setSelectedDecks={setSelectedDecks}
				selectedDecks={selectedDecks}
				setPlayers={setPlayers}
			/>
		</div>
	);
};

export default CardViewer;
