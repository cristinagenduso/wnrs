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
	theme,
}) => {
	return (
		<div
			className={`grid grid-cols-5 mx-3 laptop:w-[80%] laptop:mx-auto mt-6 text-contrastText ${theme} select-none`}
		>
			<span className="flex align-middle justify-self-start">
				<button
					className={`text-3xl m-auto ${
						disablePrevLevel
							? `text-contrastText/30 ${theme}`
							: `hover:bg-black/10 rounded-md laptop:p-1 text-contrastText ${theme}`
					}`}
					onClick={previousLevel}
					disabled={disablePrevLevel}
				>
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-7 laptop:size-6"
					>
						<polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12" />
						<polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12" />
					</svg>
				</button>
				<button
					className={`text-3xl m-auto ${
						disablePrev
							? `text-contrastText/30 ${theme}`
							: `hover:bg-black/10 rounded-md laptop:p-1 text-contrastText ${theme}`
					}`}
					onClick={previousCard}
					disabled={disablePrev}
				>
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-7 laptop:size-6"
					>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
					</svg>
				</button>
			</span>
			<p
				className={`self-center laptop:col-start-3 col-span-3 laptop:col-span-1 font-semibold laptop:font-bold text-center text-contrastText ${theme} laptop:text-base text-sm`}
			>
				LEVEL {level} - {curr} / {tot}
			</p>
			<span className="flex align-middle laptop:col-start-5 justify-self-end">
				<button
					className={`m-auto ${
						disableNext
							? `text-contrastText/30 ${theme}`
							: `hover:bg-black/10 rounded-md laptop:p-1 text-contrastText ${theme}`
					}`}
					onClick={nextCard}
					disabled={disableNext}
				>
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-7 laptop:size-6"
					>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
					</svg>
				</button>
				<button
					className={`m-auto ${
						disableNextLevel
							? `text-contrastText/30 ${theme}`
							: `hover:bg-black/10 rounded-md laptop:p-1 text-contrastText ${theme}`
					}`}
					onClick={nextLevel}
					disabled={disableNextLevel}
				>
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-7 laptop:size-6"
					>
						<polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
						<polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12" />
					</svg>
				</button>
			</span>
		</div>
	);
};

export default CardController;
