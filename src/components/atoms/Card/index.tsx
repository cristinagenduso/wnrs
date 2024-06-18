import { FC } from "react";
import { CardProps } from "./index.types";

const Card: FC<CardProps> = ({ children, textRef }) => {
	return (
		<div className="md:w-[80%] rounded-[25px] text-center md:rounded-[60px] text-main flex justify-center content-center uppercase m-auto aspect-video relative bg-paper">
			<p
				ref={textRef}
				className="w-[50%] m-auto md:text-2xl font-bold md:w-[70%] top-1/2"
			>
				{children}
			</p>
			<p className="absolute text-xs font-bold transform md:text-lg bottom-3">
				we're not really strangers
			</p>
		</div>
	);
};

export default Card;
