export interface DecksProps {
	decks: Deck[];
	categories: Categories;
	selectedDecks: string[];
	setSelectedDecks: (value) => void;
	nextStep?: () => void;
	prevStep?: () => void;
	theme: string;
}

type Categories = {
	[category: string]: Category;
};

interface Category {
	displayName: string;
	decks: Deck[];
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
