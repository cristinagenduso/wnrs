import { FC } from "react";
import { CardProps } from "./index.types";

const Card: FC<CardProps> = ({ children, textRef }) => {
	return (
		<div className="laptop:w-[80%] rounded-[25px] text-center laptop:rounded-[60px] text-[#c10016] flex justify-center content-center uppercase m-auto laptop:aspect-video h-64 laptop:h-fit relative bg-paper">
			<p
				ref={textRef}
				className="w-[80%] m-auto text-base laptop:text-2xl font-bold laptop:w-[70%] top-1/2"
			>
				{children}
			</p>
			<p className="absolute text-xs font-bold transform laptop:text-lg bottom-3">
				we're not really strangers
			</p>
		</div>
	);
};

export default Card;
