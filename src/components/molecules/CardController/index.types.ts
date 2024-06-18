import { MouseEventHandler } from "react";

export interface CardControllerProps {
	previousCard: MouseEventHandler<HTMLButtonElement>;
	nextCard: MouseEventHandler<HTMLButtonElement>;
	previousLevel: MouseEventHandler<HTMLButtonElement>;
	nextLevel: MouseEventHandler<HTMLButtonElement>;
	level: number | string;
	curr: number | string;
	tot: number | string;
	disablePrev: boolean;
	disablePrevLevel: boolean;
	disableNext: boolean;
	disableNextLevel: boolean;
	theme: string;
}
