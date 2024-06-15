import { FC } from "react";
import { DialogProps } from "./index.types";

const Dialog: FC<DialogProps> = ({
	title,
	children,
	handleClose,
	hasButton,
}) => {
	return (
		<>
			<div className="fixed top-0 left-0 z-10 w-full h-full bg-black/80">
				<div className="bg-[#c10016] w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-fit items-center">
					<div className="flex flex-row h-10 mx-5">
						<p className="m-auto text-xl font-semibold uppercase w-fit">
							{title}
						</p>
						<button onClick={handleClose}>X</button>
					</div>
					<div className="bg-[#b10015] h-[2px] w-full" />
					<div className="grid grid-cols-2 w-[70%] m-auto text-center">
						{children}
					</div>
					{hasButton && (
						<div className="mx-auto w-fit">
							<button className="mb-4 uppercase text-lg bg-[#E9C5C5] mt-10 text-[#c10016] font-bold px-6 py-2">
								add new player
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Dialog;
