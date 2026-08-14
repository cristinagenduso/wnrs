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

interface RoomState {
	code: string;
	hostName: string;
	guestName: string;
	selectedDecks: string[];
	seed: number;
	currentCardIndex: number;
	currentLevelIndex: number;
	currentPlayerIndex: number;
	started: boolean;
	createdAt: number;
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
	// Online props
	isOnline?: boolean;
	roomState?: RoomState | null;
	isHost?: boolean;
	updateGameState?: (updates: Partial<RoomState>) => Promise<void>;
	seed?: number;
}

type Categories = {
	[category: string]: Category;
};

interface Category {
	displayName: string;
	decks: Deck[];
}
