import { FC, useEffect } from "react";
import { PlayersSetupProps } from "./index.types";

const PlayersSetup: FC<PlayersSetupProps> = ({
	players,
	setPlayers,
	minPlayers,
	theme,
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

	useEffect(() => {
		if (players.length === 0 || players[players.length - 1].trim() !== "") {
			setPlayers([...players, ""]);
		}
	}, [players, setPlayers]);

	return (
		<div className="py-10">
			{players.map((player, index) => (
				<div key={index} className="grid w-1/2 grid-cols-2 mx-auto">
					<input
						name="name"
						type="text"
						value={player}
						onChange={(e) => handlePlayerNameChange(index, e.target.value)}
						className={`${theme} p-2 placeholder:opacity-60 placeholder:text-contrastText h-8 bg-light/20 my-1 rounded-md uppercase font-semibold text-contrastText bg-light focus:outline-main`}
						placeholder={`Player ${index + 1}`}
					/>
					{index !== players.length - 1 &&
						effectivePlayers.length > minPlayers && (
							<button
								className={`${theme} relative flex items-center w-8 my-auto ml-4 rounded-md aspect-square hover:bg-light/20`}
								onClick={(e) => removePlayer(index)(e)}
							>
								<svg
									viewBox="0 0 24 24"
									className={`m-auto w-7 aspect-square text-contrastText`}
									fill="currentColor"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M19 13H5v-2h14v2z" />
								</svg>
							</button>
						)}
				</div>
			))}
		</div>
	);
};

export default PlayersSetup;
