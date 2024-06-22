import { FC } from "react";
import { CardProps } from "./index.types";

const Card: FC<CardProps> = ({ children, textRef }) => {
	const isWildcard = children.startsWith("Wild Card");
	const isReminder = children.startsWith("Reminder");
	const question = isWildcard
		? children.slice(10)
		: isReminder
		? children.slice(9)
		: children;

	return (
		<>
			{isWildcard ? (
				<div className="laptop:w-[80%] rounded-[25px] text-center laptop:rounded-[60px] text-paper grid uppercase m-auto laptop:aspect-video h-64 laptop:h-fit relative bg-[#c10016] drop-shadow-md shadow-dark">
					<p className="self-end text-sm font-bold laptop:text-xl">wildcard</p>
					<p
						ref={textRef}
						className="w-[80%] m-auto text-base laptop:text-2xl font-bold laptop:w-[70%] top-1/2"
					>
						{question}
					</p>
					<p className="self-end mb-3 text-xs font-bold transform laptop:text-lg">
						we're not really strangers
					</p>
				</div>
			) : isReminder ? (
				<div className="laptop:w-[80%] rounded-[25px] flex justify-center text-center laptop:rounded-[60px] text-[#c10016] uppercase m-auto laptop:aspect-video h-64 laptop:h-fit relative bg-paper drop-shadow-md shadow-dark">
					<div className="grid grid-cols-3">
						<p className="m-auto text-sm font-bold laptop:text-xl">reminder</p>
						<p
							ref={textRef}
							className="w-[80%] col-span-2 m-auto text-base laptop:text-2xl font-bold laptop:w-[70%] top-1/2"
						>
							{question}
						</p>
					</div>
					<p className="absolute text-xs font-bold laptop:text-lg bottom-3">
						we're not really strangers
					</p>
				</div>
			) : (
				<div className="laptop:w-[80%] rounded-[25px] text-center laptop:rounded-[60px] text-[#c10016] flex justify-center content-center uppercase m-auto laptop:aspect-video h-64 laptop:h-fit bg-paper drop-shadow-md shadow-dark">
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
			)}
		</>
	);
};

export default Card;
