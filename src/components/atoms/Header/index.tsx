import { FC } from "react";
import { HeaderProps } from "./index.types";

const Header: FC<HeaderProps> = ({ player, theme, isMyTurn }) => {
	return (
		<div
			className={`${theme} mx-auto mb-3 pt-2 text-sm laptop:text-lg font-bold uppercase text-contrastText w-fit flex items-center gap-2`}
		>
			{player != "" ? (
				<>
					{isMyTurn !== undefined && (
						<span
							className={`inline-block w-2.5 h-2.5 rounded-full ${
								isMyTurn ? "bg-green-400" : "bg-contrastText/30"
							}`}
						></span>
					)}
					{`${player}'s turn`}
				</>
			) : null}
		</div>
	);
};

export default Header;
