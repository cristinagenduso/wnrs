import Button from "@atoms/Button";
import { FC, useEffect } from "react";
import { PlayersProps } from "./index.types";

const Players: FC<PlayersProps> = ({
	players,
	setPlayers,
	nextStep,
	prevStep,
	minPlayers = 1,
}) => {
	useEffect(() => {
		if (players.length < minPlayers) {
			setPlayers(Array(minPlayers).fill(""));
		}
	}, [minPlayers, players.length, setPlayers]);

	const effectivePlayers = players.filter((player) => player.trim() !== "");

	const removePlayer = (index: number) => (e) => {
		e.preventDefault();
		if (effectivePlayers.length > minPlayers) {
			const updatedPlayers = players.filter((_, i) => i !== index);
			setPlayers(updatedPlayers);
		}
	};

	const handlePlayerNameChange = (index: number, name: string) => {
		const updatedPlayers = [...players];
		updatedPlayers[index] = name;
		setPlayers(updatedPlayers);
	};

	const removeEmptyPlayers = () => {
		const filteredPlayers = players.filter((player) => player.trim() !== "");
		if (filteredPlayers.length < minPlayers) {
			setPlayers([
				...filteredPlayers,
				...Array(minPlayers - filteredPlayers.length).fill(""),
			]);
		} else {
			setPlayers(filteredPlayers);
		}
	};

	const handleNextStep = () => {
		removeEmptyPlayers();
		nextStep();
	};

	useEffect(() => {
		if (players[players.length - 1]) setPlayers([...players, ""]);
	}, [players]);

	return (
		<div className="mt-20">
			<h2 className="w-1/2 mx-auto bg-[#c10016] text-white pl-4 py-2 uppercase font-semibold">
				players
			</h2>
			<p className="w-1/2 mx-auto mt-2 mb-10">
				Just a bit more info. You may change also this later :)
			</p>
			{players.map((player, index) => (
				<div key={index} className="grid w-1/2 grid-cols-2 mx-auto">
					<input
						name="name"
						type="text"
						value={player}
						onChange={(e) => handlePlayerNameChange(index, e.target.value)}
						className="p-2 placeholder:opacity-60 h-8 bg-[#c10016]/20 my-1 rounded-md uppercase font-semibold text-[#c10016]"
						placeholder={`Player ${index + 1}`}
					/>
					{index !== players.length - 1 &&
						effectivePlayers.length > minPlayers && (
							<button
								className="relative flex items-center w-8 my-auto aspect-square hover:bg-[#c10016]/20 ml-4 rounded-md"
								onClick={(e) => removePlayer(index)(e)}
							>
								<svg
									viewBox="0 0 24 24"
									className="w-7 m-auto aspect-square text-[#c10016]"
									fill="currentColor"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M19 13H5v-2h14v2z" />
								</svg>
							</button>
						)}
				</div>
			))}
			<div className="w-[60%] grid grid-cols-2 mx-auto mt-20">
				{prevStep && (
					<div className="place-items-start">
						<Button onClick={prevStep} text="back" />
					</div>
				)}
				{nextStep != null && players.length >= minPlayers && (
					<div className="grid place-items-end">
						<Button onClick={handleNextStep} text="next" />
					</div>
				)}
			</div>
		</div>
	);
};

export default Players;
