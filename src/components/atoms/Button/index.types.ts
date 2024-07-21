import { MouseEventHandler } from "react";

export interface ButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement> | ((value) => void);
	children: string | React.ReactNode;
	theme: string;
	arrowLeft?: boolean;
}
