export interface PlayersSetupProps {
	players: string[];
	setPlayers: (players: string[]) => void;
	minPlayers: number;
	theme: string;
}
