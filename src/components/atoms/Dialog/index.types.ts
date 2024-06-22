import React, { MouseEventHandler } from "react";

export interface DialogProps {
	title: string;
	children: React.ReactNode;
	handleClose: MouseEventHandler<HTMLButtonElement>;
	isInfo?: boolean;
	theme: string;
}
