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
	setSelectedDecks: React.Dispatch<React.SetStateAction<string[]>>;
	players: string[];
	decks: Deck[];
	prevStep: () => void;
	setPlayers: (players: string[]) => void;
	theme: string;
	toggleTheme: React.Ref<HTMLParagraphElement>;
}
