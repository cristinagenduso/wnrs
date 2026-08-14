export interface CardProps {
	children: string;
	textRef: React.RefObject<HTMLParagraphElement>;
	theme?: string;
	isFlipping?: boolean;
}
