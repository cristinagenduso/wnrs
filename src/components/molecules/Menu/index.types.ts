export interface MenuProps {
	textRef: string;
	selectedDecks: string[];
	decks: Deck[];
	setSelectedDecks: React.Dispatch<React.SetStateAction<string[]>>;
	setPlayers: (players: string[]) => void;
	players: string[];
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
