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
			<div>
				<button
					className={`btn text-3xl ${
						disablePrevLevel ? "text-[#0effef]" : "hover:text-[#E9C5C5]"
					}`}
					onClick={previousLevel}
					disabled={disablePrevLevel}
				>
					&larr;
				</button>
				<button
					className={`btn text-3xl ${
						disablePrev ? "text-[#c10016]/50" : "hover:text-[#E9C5C5]"
					}`}
					onClick={previousCard}
					disabled={disablePrev}
				>
					&larr;
				</button>
			</div>
			<p className="self-center col-start-3 font-bold text-center text-[#c10016]">
				LEVEL {level} - {curr} / {tot}
			</p>
			<div className="col-start-7">
				<button
					className={`btn text-3xl ${
						disableNext ? "text-[#c10016]/50" : "hover:text-[#E9C5C5]"
					}`}
					onClick={nextCard}
					disabled={disableNext}
				>
					&rarr;
				</button>
				<button
					className={`btn text-3xl ${
						disableNextLevel ? "text-[#0effef]" : "hover:text-[#E9C5C5]"
					}`}
					onClick={nextLevel}
					disabled={disableNextLevel}
				>
					&rarr;
				</button>
			</div>
		</div>
	);
};

export default CardController;
