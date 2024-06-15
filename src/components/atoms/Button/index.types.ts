import { MouseEventHandler } from "react";

export interface ButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
	text: string;
}
