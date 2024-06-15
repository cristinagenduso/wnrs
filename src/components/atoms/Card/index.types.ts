import React from "react";

export interface CardProps {
	children: React.ReactNode;
	textRef: React.Ref<HTMLParagraphElement>;
	theme: string;
}
