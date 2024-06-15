import { FC } from "react";
import { DeckSelectionProps } from "./index.types";

const DeckSelection: FC<DeckSelectionProps> = ({
	decks,
	selectedDecks,
	setSelectedDecks,
	nextStep,
	hasButton,
}) => {
	const toggleDeck = (id: string) => {
		setSelectedDecks((prev) =>
			prev.includes(id) ? prev.filter((deckId) => deckId !== id) : [...prev, id]
		);
	};

	return (
		<div>
			<h2>Seleziona i Mazzi</h2>
			{decks.map((deck) => (
				<div key={deck.short_name}>
					<input
						type="checkbox"
						checked={selectedDecks.includes(deck.short_name)}
						onChange={() => toggleDeck(deck.short_name)}
						className="none"
					/>
					{deck.name}
				</div>
			))}
			{hasButton ? (
				selectedDecks.length > 0 ? (
					<button onClick={nextStep}>Avanti</button>
				) : null
			) : null}
		</div>
	);
};

export default DeckSelection;
