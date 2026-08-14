import { FC } from "react";

interface ModeSelectionProps {
	onSelectOnline: () => void;
	onSelectLocal: () => void;
	theme: string;
}

const ModeSelection: FC<ModeSelectionProps> = ({
	onSelectOnline,
	onSelectLocal,
	theme,
}) => {
	return (
		<div className="flex items-center justify-center h-full px-4">
			<div className="w-full max-w-md">
				<h2
					className={`text-center text-xl font-bold uppercase tracking-wider mb-2 ${theme} text-main`}
				>
					How do you want to play?
				</h2>
				<p className="text-center text-sm text-gray-500 mb-8">
					Choose your game mode
				</p>

				<div className="flex flex-col gap-4">
					{/* Online Mode Card */}
					<button
						onClick={onSelectOnline}
						className={`${theme} group relative w-full p-6 rounded-2xl border-2 border-main/20 bg-main/5 hover:bg-main/10 transition-all duration-300 text-left hover:border-main/50 hover:scale-[1.02] active:scale-[0.98]`}
					>
						<div className="flex items-center gap-4">
							<div
								className={`${theme} flex items-center justify-center w-14 h-14 rounded-xl bg-main/15 group-hover:bg-main/25 transition-colors`}
							>
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									className={`${theme} w-7 h-7 text-main`}
								>
									<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
								</svg>
							</div>
							<div>
								<h3
									className={`${theme} text-lg font-bold uppercase text-main`}
								>
									Play Online
								</h3>
								<p className="text-sm text-gray-500 mt-1">
									Create a room and invite someone to play remotely
								</p>
							</div>
						</div>
						<div
							className={`${theme} absolute right-4 top-1/2 -translate-y-1/2 text-main/40 group-hover:text-main/70 group-hover:translate-x-1 transition-all`}
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
							</svg>
						</div>
					</button>

					{/* Local Mode Card */}
					<button
						onClick={onSelectLocal}
						className={`${theme} group relative w-full p-6 rounded-2xl border-2 border-main/20 bg-main/5 hover:bg-main/10 transition-all duration-300 text-left hover:border-main/50 hover:scale-[1.02] active:scale-[0.98]`}
					>
						<div className="flex items-center gap-4">
							<div
								className={`${theme} flex items-center justify-center w-14 h-14 rounded-xl bg-main/15 group-hover:bg-main/25 transition-colors`}
							>
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									className={`${theme} w-7 h-7 text-main`}
								>
									<path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z" />
									<circle cx="9" cy="8" r="4" />
									<path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z" />
									<path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z" />
								</svg>
							</div>
							<div>
								<h3
									className={`${theme} text-lg font-bold uppercase text-main`}
								>
									Play Local
								</h3>
								<p className="text-sm text-gray-500 mt-1">
									Play together on the same device or during a video call
								</p>
							</div>
						</div>
						<div
							className={`${theme} absolute right-4 top-1/2 -translate-y-1/2 text-main/40 group-hover:text-main/70 group-hover:translate-x-1 transition-all`}
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
							</svg>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModeSelection;
