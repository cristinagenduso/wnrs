import { FC } from "react";
import { DialogProps } from "./index.types";

const Dialog: FC<DialogProps> = ({ title, children, handleClose }) => {
	return (
		<>
			<div className="fixed top-0 left-0 z-10 w-full h-full bg-black/80">
				<div className="bg-[#c10016] absolute top-1/2 left-1/2 w-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white h-fit items-center">
					<div className="relative flex h-12 align-middle">
						<p className="m-auto text-lg font-semibold uppercase w-fit">
							{title}
						</p>
						<button
							onClick={handleClose}
							className="absolute text-white right-4 top-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="w-full h-[2px] bg-[#b10015]" />
					{children}
				</div>
			</div>
		</>
	);
};

export default Dialog;
