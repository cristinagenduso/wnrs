import Dialog from "@atoms/Dialog";
import { FC } from "react";
import { MenuItemProps } from "./index.types";

const MenuItem: FC<MenuItemProps> = ({
	handleClick,
	children,
	show,
	title,
	icon,
	theme,
}) => {
	return (
		<>
			<button onClick={handleClick} className="mx-auto cursor-pointer w-fit">
				{icon}
			</button>
			{show && (
				<Dialog handleClose={handleClick} title={title} theme={theme}>
					{children}
				</Dialog>
			)}
		</>
	);
};

export default MenuItem;
