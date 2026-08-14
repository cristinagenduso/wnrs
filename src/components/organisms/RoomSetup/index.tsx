import Button from "@atoms/Button";
import { FC, useState } from "react";

interface RoomSetupProps {
	onCreateRoom: (playerName: string) => void;
	onJoinRoom: (code: string, playerName: string) => void;
	error: string | null;
	theme: string;
	prevStep: () => void;
}

const RoomSetup: FC<RoomSetupProps> = ({
	onCreateRoom,
	onJoinRoom,
	error,
	theme,
	prevStep,
}) => {
	const [mode, setMode] = useState<"choose" | "create" | "join">("choose");
	const [playerName, setPlayerName] = useState("");
	const [roomCode, setRoomCode] = useState("");

	const handleCreate = () => {
		if (playerName.trim()) {
			onCreateRoom(playerName.trim());
		}
	};

	const handleJoin = () => {
		if (playerName.trim() && roomCode.trim().length >= 4) {
			onJoinRoom(roomCode.trim().toUpperCase(), playerName.trim());
		}
	};

	return (
		<div className="flex items-center justify-center h-full px-4">
			<div className="w-full max-w-md">
				{mode === "choose" && (
					<div className="animate-fadeIn">
						<h2
							className={`text-center text-xl font-bold uppercase tracking-wider mb-8 ${theme} text-main`}
						>
							Online Play
						</h2>

						<div className="flex flex-col gap-4">
							<button
								onClick={() => setMode("create")}
								className={`${theme} group w-full p-5 rounded-2xl border-2 border-main/20 bg-main/5 hover:bg-main/10 transition-all duration-300 hover:border-main/50 hover:scale-[1.02] active:scale-[0.98]`}
							>
								<div className="flex items-center gap-4">
									<div
										className={`${theme} flex items-center justify-center w-12 h-12 rounded-xl bg-main/15 text-2xl`}
									>
										✦
									</div>
									<div className="text-left">
										<h3
											className={`${theme} text-base font-bold uppercase text-main`}
										>
											Create Room
										</h3>
										<p className="text-xs text-gray-500 mt-0.5">
											Start a new game and invite someone
										</p>
									</div>
								</div>
							</button>

							<button
								onClick={() => setMode("join")}
								className={`${theme} group w-full p-5 rounded-2xl border-2 border-main/20 bg-main/5 hover:bg-main/10 transition-all duration-300 hover:border-main/50 hover:scale-[1.02] active:scale-[0.98]`}
							>
								<div className="flex items-center gap-4">
									<div
										className={`${theme} flex items-center justify-center w-12 h-12 rounded-xl bg-main/15 text-2xl`}
									>
										🔗
									</div>
									<div className="text-left">
										<h3
											className={`${theme} text-base font-bold uppercase text-main`}
										>
											Join Room
										</h3>
										<p className="text-xs text-gray-500 mt-0.5">
											Enter a room code to join a game
										</p>
									</div>
								</div>
							</button>
						</div>

						<div className="mt-8 flex justify-start">
							<Button onClick={prevStep} theme={theme} arrowLeft>
								back
							</Button>
						</div>
					</div>
				)}

				{(mode === "create" || mode === "join") && (
					<div className="animate-fadeIn">
						<h2
							className={`text-center text-xl font-bold uppercase tracking-wider mb-2 ${theme} text-main`}
						>
							{mode === "create" ? "Create Room" : "Join Room"}
						</h2>
						<p className="text-center text-sm text-gray-500 mb-8">
							{mode === "create"
								? "Enter your name to create a room"
								: "Enter your name and the room code"}
						</p>

						<div className="flex flex-col gap-4">
							<div>
								<label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5 ml-1">
									Your Name
								</label>
								<input
									type="text"
									value={playerName}
									onChange={(e) => setPlayerName(e.target.value)}
									placeholder="Enter your name"
									className={`${theme} w-full p-3 rounded-xl bg-main/10 uppercase font-semibold text-main placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-main/40 transition-all`}
									autoFocus
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											if (mode === "create") handleCreate();
											else if (roomCode.trim().length >= 4) handleJoin();
										}
									}}
								/>
							</div>

							{mode === "join" && (
								<div>
									<label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5 ml-1">
										Room Code
									</label>
									<input
										type="text"
										value={roomCode}
										onChange={(e) =>
											setRoomCode(e.target.value.toUpperCase().slice(0, 6))
										}
										placeholder="XXXXXX"
										maxLength={6}
										className={`${theme} w-full p-3 rounded-xl bg-main/10 uppercase font-bold text-main placeholder:opacity-40 text-center text-2xl tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-main/40 transition-all`}
										onKeyDown={(e) => {
											if (e.key === "Enter") handleJoin();
										}}
									/>
								</div>
							)}

							{error && (
								<p className="text-red-500 text-sm text-center font-medium animate-fadeIn">
									{error}
								</p>
							)}

							<div className="grid grid-cols-2 mt-4">
								<div className="place-items-start">
									<Button
										onClick={() => setMode("choose")}
										theme={theme}
										arrowLeft
									>
										back
									</Button>
								</div>
								<div className="grid place-items-end">
									<Button
										onClick={mode === "create" ? handleCreate : handleJoin}
										theme={theme}
									>
										{mode === "create" ? "create" : "join"}
									</Button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default RoomSetup;
