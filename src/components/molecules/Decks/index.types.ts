export interface DecksProps {
	decks: Deck[];
	selectedDecks: string[];
	setSelectedDecks: React.Dispatch<React.SetStateAction<string[]>>;
	nextStep?: () => void;
	hasButton?: boolean;
}

interface Deck {
	name: string;
	short_name: string;
	players: string;
	theme: string;
	levels: string[];
	isExpansion: boolean;
	backDesc?: string[];
	preview?: string[];
	questions: string[][];
}
