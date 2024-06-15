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
	disableNext,
}) => {
	return (
		<div className="grid grid-cols-5 w-[80%] m-auto mt-6 text-[#E9C5C5]/50">
			<div>
				<button
					className="hover:text-[#E9C5C5] text-3xl"
					onClick={previousCard}
					disabled={disablePrev}
				>
					&larr;
				</button>
				<button
					className="text-3xl hover:text-blue-800"
					onClick={previousLevel}
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
					className="text-3xl hover:text-blue-800"
					onClick={nextLevel}
					disabled={disableNext}
				>
					&rarr;
				</button>
				<button
					className="hover:text-[#E9C5C5] text-3xl"
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
