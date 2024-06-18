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

export interface CardViewerProps {
	selectedDecks: string[];
	setSelectedDecks: (value) => void;
	players: string[];
	decks: Deck[];
	prevStep: () => void;
	setPlayers: (players: string[]) => void;
	theme: string;
	toggleTheme: (theme: string) => void;
	categories: Categories;
}

type Categories = {
	[category: string]: Category;
};

interface Category {
	displayName: string;
	decks: Deck[];
}
