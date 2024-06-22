import Button from "@atoms/Button";
import { FC, useState } from "react";
import { PlayersSetupProps } from "./index.types";

const PlayersSetup: FC<PlayersSetupProps> = ({
	players,
	setPlayers,
	minPlayers,
	theme,
}) => {
	const [localPlayers, setLocalPlayers] = useState([...players]);

	const addPlayer = () => {
		setLocalPlayers([...localPlayers, ""]);
	};

	const effectivePlayers = localPlayers.filter(
		(player) => player.trim() !== ""
	);

	const handleSaveChanges = () => {
		const filteredPlayers = localPlayers.filter(
			(player) => player.trim() !== ""
		);
		if (filteredPlayers.length < minPlayers) {
			setPlayers([
				...filteredPlayers,
				...Array(minPlayers - filteredPlayers.length).fill(""),
			]);
		} else {
			setPlayers(filteredPlayers);
		}
	};

	const removePlayer = (index: number) => (e) => {
		e.preventDefault();
		if (localPlayers.length > minPlayers) {
			const updatedPlayers = localPlayers.filter((_, i) => i !== index);
			setLocalPlayers(updatedPlayers);
		}
	};

	const handlePlayerNameChange = (index: number, name: string) => {
		const updatedPlayers = [...localPlayers];
		updatedPlayers[index] = name;
		setLocalPlayers(updatedPlayers);
	};

	const arraysEqual = (a, b) => {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	};

	return (
		<div className="py-10">
			{localPlayers.map((player, index) => (
				<div key={index} className="grid w-1/2 grid-cols-2 mx-auto">
					<input
						name="name"
						type="text"
						value={player}
						onChange={(e) => handlePlayerNameChange(index, e.target.value)}
						className={`${theme} p-2 placeholder:opacity-60 placeholder:text-contrastText h-8 bg-light/20 my-1 rounded-md uppercase font-semibold text-contrastText bg-light focus:outline-main`}
						placeholder={`Player ${index + 1}`}
					/>
					{index !== localPlayers.length - 1 &&
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
			<div className="grid grid-cols-2 mx-6 mt-5 gap-x-4">
				<Button onClick={addPlayer} theme={theme}>
					add player
				</Button>
				{!arraysEqual(localPlayers, players) && (
					<Button onClick={handleSaveChanges} theme={theme}>
						save
					</Button>
				)}
			</div>
		</div>
	);
};

export default PlayersSetup;
