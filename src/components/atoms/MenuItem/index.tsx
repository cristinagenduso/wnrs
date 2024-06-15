import Dialog from "@atoms/Dialog";
import { FC } from "react";
import { MenuItemProps } from "./index.types";

const MenuItem: FC<MenuItemProps> = ({
	handleClick,
	children,
	show,
	title,
	icon,
}) => {
	return (
		<>
			<button onClick={handleClick} className="cursor-pointer">
				{icon}
			</button>
			{show && (
				<Dialog handleClose={handleClick} title={title}>
					{children}
				</Dialog>
			)}
		</>
	);
};

export default MenuItem;
