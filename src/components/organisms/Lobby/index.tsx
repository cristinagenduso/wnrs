import Button from "@atoms/Button";
import { FC, useState } from "react";

interface LobbyProps {
	roomCode: string;
	hostName: string;
	guestName: string;
	isHost: boolean;
	onStart: () => void;
	onLeave: () => void;
	theme: string;
}

const Lobby: FC<LobbyProps> = ({
	roomCode,
	hostName,
	guestName,
	isHost,
	onStart,
	onLeave,
	theme,
}) => {
	const [copied, setCopied] = useState(false);
	const isReady = hostName && guestName;

	const shareUrl = `${window.location.origin}${window.location.pathname}?room=${roomCode}`;

	const copyCode = () => {
		navigator.clipboard.writeText(roomCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const copyLink = () => {
		navigator.clipboard.writeText(shareUrl);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="flex items-center justify-center h-full px-4">
			<div className="w-full max-w-md text-center">
				<h2
					className={`text-xl font-bold uppercase tracking-wider mb-2 ${theme} text-main`}
				>
					{isReady ? "Ready to Play!" : "Waiting for Player..."}
				</h2>

				{/* Room Code Display */}
				<div className={`${theme} mt-6 p-6 rounded-2xl bg-main/5 border-2 border-main/15`}>
					<p className="text-xs font-semibold uppercase text-gray-500 mb-2">
						Room Code
					</p>
					<p
						className={`${theme} text-4xl font-bold tracking-[0.4em] text-main cursor-pointer hover:opacity-80 transition-opacity`}
						onClick={copyCode}
						title="Click to copy"
					>
						{roomCode}
					</p>
					<div className="flex gap-2 justify-center mt-4">
						<button
							onClick={copyCode}
							className={`${theme} text-xs font-semibold uppercase px-4 py-2 rounded-lg bg-main/10 text-main hover:bg-main/20 transition-colors`}
						>
							{copied ? "✓ Copied!" : "Copy Code"}
						</button>
						<button
							onClick={copyLink}
							className={`${theme} text-xs font-semibold uppercase px-4 py-2 rounded-lg bg-main/10 text-main hover:bg-main/20 transition-colors`}
						>
							Copy Link
						</button>
					</div>
				</div>

				{/* Players */}
				<div className="mt-6 flex flex-col gap-3">
					{/* Host */}
					<div
						className={`${theme} flex items-center gap-3 p-4 rounded-xl bg-main/5 border border-main/10`}
					>
						<div
							className={`${theme} w-10 h-10 rounded-full bg-main flex items-center justify-center text-contrastText font-bold text-sm`}
						>
							{hostName.charAt(0).toUpperCase()}
						</div>
						<div className="text-left">
							<p className={`${theme} font-bold uppercase text-main text-sm`}>
								{hostName}
							</p>
							<p className="text-xs text-gray-400">Host</p>
						</div>
						<div className="ml-auto">
							<span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
						</div>
					</div>

					{/* Guest */}
					<div
						className={`${theme} flex items-center gap-3 p-4 rounded-xl border border-dashed ${
							guestName ? "bg-main/5 border-main/10" : "bg-gray-50 border-gray-200"
						}`}
					>
						{guestName ? (
							<>
								<div
									className={`${theme} w-10 h-10 rounded-full bg-main flex items-center justify-center text-contrastText font-bold text-sm`}
								>
									{guestName.charAt(0).toUpperCase()}
								</div>
								<div className="text-left">
									<p
										className={`${theme} font-bold uppercase text-main text-sm`}
									>
										{guestName}
									</p>
									<p className="text-xs text-gray-400">Guest</p>
								</div>
								<div className="ml-auto">
									<span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
								</div>
							</>
						) : (
							<>
								<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center animate-pulse">
									<svg
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-5 h-5 text-gray-400"
									>
										<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
									</svg>
								</div>
								<div className="text-left">
									<p className="font-semibold text-gray-400 text-sm uppercase">
										Waiting...
									</p>
									<p className="text-xs text-gray-300">
										Share the code above
									</p>
								</div>
								<div className="ml-auto">
									<span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
								</div>
							</>
						)}
					</div>
				</div>

				{/* Actions */}
				<div className="mt-8 flex justify-between items-center">
					<Button onClick={onLeave} theme={theme} arrowLeft>
						leave
					</Button>
					{isHost && isReady && (
						<Button onClick={onStart} theme={theme}>
							start
						</Button>
					)}
				</div>

				{!isHost && !isReady && (
					<p className="mt-4 text-sm text-gray-400">
						Waiting for the host to start the game...
					</p>
				)}
			</div>
		</div>
	);
};

export default Lobby;
