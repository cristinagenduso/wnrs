import { FC } from "react";
import { HeaderProps } from "./index.types";

const Header: FC<HeaderProps> = ({ player, theme }) => {
	return (
		<div
			className={`${theme} mx-auto mb-3 text-sm md:text-lg font-bold uppercase text-contrastText w-fit`}
		>
			{player != "" ? `${player}'s turn` : null}
		</div>
	);
};

export default Header;
