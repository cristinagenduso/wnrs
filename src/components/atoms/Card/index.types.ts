import React from "react";

export interface CardProps {
	children: string;
	textRef: React.Ref<HTMLParagraphElement>;
	theme: string;
}
