import { FC } from "react";
import { CardProps } from "./index.types";

const Card: FC<CardProps> = ({ children, textRef }) => {
	return (
		<div className="w-[80%] bg-[#E9C5C5] rounded-[60px] text-[#C10016] text-center uppercase m-auto aspect-video relative">
			<p
				ref={textRef}
				className="absolute px-32 text-2xl font-bold align-middle transform -translate-y-1/2 top-1/2"
			>
				{children}
			</p>
			<p className="absolute text-lg font-bold transform -translate-x-1/2 left-1/2 bottom-3">
				we're not really strangers
			</p>
		</div>
	);
};

export default Card;
