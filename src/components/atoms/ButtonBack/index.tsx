import React, { FC } from "react";
import { ButtonBackProps } from "./index.types";

const ButtonBack: FC<ButtonBackProps> = ({ prevStep }) => {
	return (
		<div className="absolute top-2 left-2">
			<button
				className="hover:text-[#E9C5C5] text-[#c10016] uppercase font-semibold"
				onClick={prevStep}
			>
				&larr; main page
			</button>
		</div>
	);
};

export default ButtonBack;
