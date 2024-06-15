import { FC } from "react";
import { ButtonProps } from "./index.types";

const Button: FC<ButtonProps> = ({ onClick, text }) => {
	return (
		<button
			className="hover:text-[#E9C5C5] bg-[#c10016] text-white uppercase px-4 py-1 font-semibold select-none"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
