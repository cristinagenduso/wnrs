export interface PlayersProps {
	players: string[];
	setPlayers: (players: string[]) => void;
	nextStep?: () => void;
	prevStep?: () => void;
	minPlayers?: number;
	theme: string;
}
