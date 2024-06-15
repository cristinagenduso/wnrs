import { FC } from "react";
import { CardControllerProps } from "./index.types";

const CardController: FC<CardControllerProps> = ({
	previousCard,
	nextCard,
	previousLevel,
	nextLevel,
	level,
	curr,
	tot,
	disablePrev,
	disablePrevLevel,
	disableNext,
	disableNextLevel,
}) => {
	return (
		<div className="grid grid-cols-5 w-[80%] m-auto mt-6 text-[#c10016] select-none">
			<span className="my-auto h-fit">
				<button
					className={`btn text-3xl m-auto ${
						disablePrevLevel
							? "text-[#c10016]/30"
							: "hover:bg-gray-200 rounded-sm p-1 text-[#c10016]"
					}`}
					onClick={previousLevel}
					disabled={disablePrevLevel}
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
						<polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12" />
						<polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12" />
					</svg>
				</button>
				<button
					className={`btn text-3xl m-auto ${
						disablePrev
							? "text-[#c10016]/30"
							: "hover:bg-gray-200 rounded-sm p-1 text-[#c10016]"
					}`}
					onClick={previousCard}
					disabled={disablePrev}
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
					</svg>
				</button>
			</span>
			<p className="self-center col-start-3 font-bold text-center text-[#c10016]">
				LEVEL {level} - {curr} / {tot}
			</p>
			<div className="col-start-7">
				<button
					className={`btn text-3xl m-auto ${
						disableNext
							? "text-[#c10016]/30"
							: "hover:bg-gray-200 rounded-sm p-1 text-[#c10016]"
					}`}
					onClick={nextCard}
					disabled={disableNext}
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
					</svg>
				</button>
				<button
					className={`btn text-3xl m-auto ${
						disableNextLevel
							? "text-[#c10016]/30"
							: "hover:bg-gray-200 rounded-sm p-1 text-[#c10016]"
					}`}
					onClick={nextLevel}
					disabled={disableNextLevel}
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
						<polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
						<polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default CardController;
