import { FC } from "react";
import { HeaderProps } from "./index.types";

const Header: FC<HeaderProps> = ({ player, theme }) => {
	return (
		<div
			className={`${theme} mx-auto mb-3 text-sm laptop:text-lg font-bold uppercase text-contrastText w-fit`}
		>
			{player != "" ? `${player}'s turn` : null}
		</div>
	);
};

export default Header;
