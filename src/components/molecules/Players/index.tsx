import Button from "@atoms/Button";
import { FC, useEffect, useRef, useState } from "react";
import { PlayersProps } from "./index.types";

const Players: FC<PlayersProps> = ({
	players,
	setPlayers,
	nextStep,
	prevStep,
	minPlayers = 1,
}) => {
	const lastInputRef = useRef<HTMLInputElement | null>(null);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		if (players.length < minPlayers) {
			setPlayers(Array(minPlayers).fill(""));
		}
	}, [minPlayers, players.length, setPlayers]);

	const addPlayer = () => {
		setPlayers([...players, ""]);
		setTimeout(() => {
			lastInputRef.current?.focus();
		}, 0);
	};

	const removePlayer = (index: number) => {
		if (players.length > minPlayers) {
			const updatedPlayers = players.filter((_, i) => i !== index);
			setPlayers(updatedPlayers);
			validatePlayerNames(updatedPlayers);
		}
	};

	const handlePlayerNameChange = (index: number, name: string) => {
		const updatedPlayers = [...players];
		updatedPlayers[index] = name;
		setPlayers(updatedPlayers);
		validatePlayerNames(updatedPlayers);
	};

	const handleKeyPress = (
		event: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (event.key === "Enter") {
			if (index === players.length - 1) {
				addPlayer();
			}
		}
	};

	const validatePlayerNames = (playerNames: string[]) => {
		const nameSet = new Set();
		for (const name of playerNames) {
			if (name.trim() === "") {
				setError("Player's name cannot be empty.");
				return;
			}
			if (nameSet.has(name)) {
				setError("Player's name must be unique.");
				return;
			}
			nameSet.add(name);
		}
		setError(null);
	};

	return (
		<div className="mt-20">
			<h2 className="w-1/2 mx-auto  bg-[#c10016] text-white pl-4 py-2 uppercase font-semibold">
				players
			</h2>
			<p className="w-1/2 mx-auto mt-2 mb-10">
				Don't worry. You may change this later :)
			</p>
			{players.map((player, index) => (
				<div key={index} className="w-1/2 mx-auto ">
					<label htmlFor={player} className="flex mb-10">
						<span className="text-[#c10016] font-semibold">
							Player {index + 1}:{" "}
						</span>
						<input
							type="text"
							value={player}
							onChange={(e) => handlePlayerNameChange(index, e.target.value)}
							onKeyDown={(e) => handleKeyPress(e, index)}
							ref={index === players.length - 1 ? lastInputRef : null}
							className="border-[#c10016] border-b-4 focus:outline-none focus:border-dotted ml-2"
						/>
						{players.length > minPlayers ? (
							<button
								onClick={() => removePlayer(index)}
								className="text-[#c10016] ml-6 font-semibold"
							>
								x
							</button>
						) : null}
					</label>
				</div>
			))}
			{error && <p className="text-violet-500">{error}</p>}
			<div className="m-auto w-fit">
				<Button onClick={addPlayer} text="add new player" />
			</div>
			<div className="w-[60%] grid grid-cols-2 mx-auto mt-20">
				{prevStep && (
					<div className="place-items-start">
						<Button onClick={prevStep} text="back" />
					</div>
				)}
				{nextStep != null &&
					players.length >= minPlayers &&
					!players.some((name) => name.trim() === "" || !!error) && (
						<div className="grid place-items-end">
							<Button onClick={nextStep} text="next" />
						</div>
					)}
			</div>
		</div>
	);
};

export default Players;
