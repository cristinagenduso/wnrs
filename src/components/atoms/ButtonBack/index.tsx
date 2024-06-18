import { FC } from "react";
import { ButtonBackProps } from "./index.types";

const ButtonBack: FC<ButtonBackProps> = ({ prevStep, theme }) => {
	return (
		<div className="absolute top-2 left-2">
			<button
				className={`${theme} opacity-80 hover:opacity-100 text-contrastText uppercase font-semibold flex`}
				onClick={prevStep}
			>
				<svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
				</svg>
				main page
			</button>
		</div>
	);
};

export default ButtonBack;
