import { FC } from "react";
import { ButtonProps } from "./index.types";

const Button: FC<ButtonProps> = ({ onClick, children, theme, arrowLeft }) => {
	return arrowLeft ? (
		<div className="flex flex-row group w-fit">
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className={`group-hover:text-main mr-[2px] size-6 my-auto aspect-square ${theme} laptop:text-transparent text-main transform group-hover:-translate-x-2 duration-300 ease-in-out rotate-180`}
			>
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
			</svg>
			<button
				className={`${theme} hover:bg-dark bg-main text-contrastText uppercase px-4 py-1 font-semibold select-none`}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	) : (
		<div className="flex flex-row group w-fit">
			<button
				className={`${theme} hover:bg-dark bg-main text-contrastText uppercase px-4 py-1 font-semibold select-none`}
				onClick={onClick}
			>
				{children}
			</button>
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className={`group-hover:text-main ml-[2px] size-6 my-auto aspect-square ${theme} laptop:text-transparent text-main transform group-hover:translate-x-2 duration-300 ease-in-out`}
			>
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
			</svg>
		</div>
	);
};

export default Button;
