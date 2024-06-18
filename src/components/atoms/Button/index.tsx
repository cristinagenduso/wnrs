import { FC } from "react";
import { ButtonProps } from "./index.types";

const Button: FC<ButtonProps> = ({ onClick, children, theme }) => {
	return (
		<button
			className={`${theme} bg-main text-contrastText uppercase px-4 py-1 font-semibold select-none`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
