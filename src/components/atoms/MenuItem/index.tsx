import Dialog from "@atoms/Dialog";
import { FC } from "react";
import { MenuItemProps } from "./index.types";

const MenuItem: FC<MenuItemProps> = ({
	handleClick,
	children,
	show,
	title,
	icon,
	isDeck,
	theme,
}) => {
	return (
		<>
			<button onClick={handleClick} className="cursor-pointer w-fit">
				{icon}
			</button>
			{show && (
				<Dialog
					handleClose={handleClick}
					title={title}
					isDeck={isDeck}
					theme={theme}
				>
					{children}
				</Dialog>
			)}
		</>
	);
};

export default MenuItem;
