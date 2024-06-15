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
		<div className="grid grid-cols-5 w-[80%] m-auto mt-6 text-[#E9C5C5]/50 select-none">
			<div>
				<button
					className={`btn hover:text-[#E9C5C5] text-3xl ${
						disablePrev ? "invisible" : ""
					}`}
					onClick={previousCard}
					disabled={disablePrev}
				>
					&larr;
				</button>
				<button
					className={`btn text-red-600 hover:text-[#E9C5C5] text-3xl ${
						disablePrevLevel ? "invisible" : ""
					}`}
					onClick={previousLevel}
					disabled={disablePrevLevel}
				>
					&larr;
				</button>
			</div>
			<p className="self-center col-start-3 font-bold text-center text-[#c10016]">
				LEVEL {level} - {curr} / {tot}
			</p>
			<div className="col-start-7">
				<button
					className={`btn text-red-600 hover:text-[#E9C5C5] text-3xl ${
						disableNextLevel ? "invisible" : ""
					}`}
					onClick={nextLevel}
					disabled={disableNextLevel}
				>
					&rarr;
				</button>
				<button
					className={`btn hover:text-[#E9C5C5] text-3xl ${
						disableNext ? "invisible" : ""
					}`}
					onClick={nextCard}
					disabled={disableNext}
				>
					&rarr;
				</button>
			</div>
		</div>
	);
};

export default CardController;
