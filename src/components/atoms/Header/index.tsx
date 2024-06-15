import { FC } from "react";
import { HeaderProps } from "./index.types";

const Header: FC<HeaderProps> = ({ player }) => {
	return (
		<div className="mx-auto mb-3 text-[#E9C5C5] uppercase w-fit text-lg font-bold">
			{player}'s turn
		</div>
	);
};

export default Header;
