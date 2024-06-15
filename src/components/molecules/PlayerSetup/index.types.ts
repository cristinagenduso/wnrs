export interface PlayerSetupProps {
	players: string[];
	setPlayers: (players: string[]) => void;
	nextStep?: () => void;
	prevStep?: () => void;
	minPlayers?: number;
}
