import { FC, useEffect, useState } from "react";
import { ThemeSelectorProps } from "./index.types";

const ThemeSelector: FC<ThemeSelectorProps> = ({
	theme,
	toggleTheme,
	onClose,
	defaultIndex = 0,
}) => {
	const [activeIndex, setActiveIndex] = useState(defaultIndex);

	useEffect(() => {
		const currentIndex = themes.indexOf(theme);
		setActiveIndex(currentIndex !== -1 ? currentIndex : defaultIndex);
	}, [theme]);

	const handleToggleTheme = (index: number, selectedTheme: string) => {
		setActiveIndex(index);
		toggleTheme(selectedTheme);
		onClose();
	};

	const themes = [
		"main",
		"ownIt",
		"selfLove",
		"race",
		"voting",
		"bumbleDate",
		"bumbleBFF",
		"bumbleBizz",
		"valentino",
		"cann",
		"hbo",
	];

	const CheckIcon = ({ selected }: { selected: boolean }) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={`h-4 w-4 mr-2 my-auto col-start-1 stroke-2 ${theme} ${
				selected
					? "text-contrastText stroke-2"
					: "text-transparent cursor-default"
			}`}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 12.75 6 6 9-13.5"
			/>
		</svg>
	);

	return (
		<div className="grid w-[75%] m-auto py-6">
			{themes.map((theme, i) => (
				<div key={i} className="grid grid-cols-5 pl-2 mt-1 group">
					<input
						type="radio"
						name="themeSelector"
						value={theme}
						id={theme}
						onChange={() => handleToggleTheme(i, theme)}
						className="sr-only"
						checked={i === activeIndex}
					/>
					<label
						htmlFor={theme}
						className="flex items-center col-span-3 font-semibold uppercase cursor-pointer group-hover:underline"
					>
						<CheckIcon selected={i === activeIndex} />
						{theme}
					</label>
					<div
						className={`${theme} h-fit py-[2px] bg-paper text-contrastPaperText text-center text-sm font-bold`}
					>
						WNRS
					</div>
					<div
						className={`${theme} h-fit py-[2px] bg-main text-contrastText text-center text-sm font-bold`}
					>
						WNRS
					</div>
				</div>
			))}
		</div>
	);
};

export default ThemeSelector;
