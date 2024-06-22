import { MouseEventHandler } from "react";

export interface MenuItemProps {
	handleClick: MouseEventHandler<HTMLButtonElement>;
	children?: React.ReactNode;
	show?: boolean;
	title?: string;
	icon: React.ReactNode;
	theme: string;
}
