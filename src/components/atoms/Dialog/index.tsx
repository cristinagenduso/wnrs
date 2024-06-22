import { FC } from "react";
import { DialogProps } from "./index.types";

const Dialog: FC<DialogProps> = ({
	title,
	children,
	handleClose,
	isInfo,
	theme,
}) => {
	return (
		<>
			{isInfo ? (
				<div className="absolute z-10 w-full h-full overflow-y-auto transform py-[5%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black/90 tablet:bg-black/80">
					<div
						className={`bg-main ${theme} mx-auto absolute top-1/2 left-1/2 w-full h-fit tablet:w-[55%] transform -translate-x-1/2 -translate-y-1/2 text-contrastText items-center`}
					>
						<div className="relative flex my-4 align-middle">
							<p className="m-auto font-semibold text-center uppercase tablet:text-lg w-[80%] mt-5 tablet:w-fit">
								{title}
							</p>
							<button
								onClick={handleClose}
								className="absolute text-contrastText right-4 top-2"
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
						<div className="w-[80%] mx-auto h-[2px] bg-black/20" />
						{children}
					</div>
				</div>
			) : (
				<div className="fixed top-0 left-0 z-10 w-screen h-full bg-main tablet:bg-black/80">
					<div
						className={`${theme} bg-main absolute top-1/2 left-1/2 tablet:w-[50%] w-full transform -translate-x-1/2 -translate-y-1/2 text-contrastText h-fit items-center`}
					>
						<div className="relative flex h-12 align-middle">
							<p className="m-auto text-lg font-semibold uppercase w-fit">
								{title}
							</p>
							<button
								onClick={handleClose}
								className="absolute text-contrastText right-4 top-2"
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
						<div className="w-full h-[2px] bg-black/20" />
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Dialog;
