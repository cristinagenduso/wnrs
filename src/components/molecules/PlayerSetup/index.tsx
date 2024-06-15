import { FC, useEffect, useRef, useState } from "react";
import { PlayerSetupProps } from "./index.types";

const PlayerSetup: FC<PlayerSetupProps> = ({
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
				setError("I nomi dei giocatori non possono essere vuoti.");
				return;
			}
			if (nameSet.has(name)) {
				setError("I nomi dei giocatori devono essere unici.");
				return;
			}
			nameSet.add(name);
		}
		setError(null);
	};

	return (
		<div>
			<h2>Inserisci i Giocatori</h2>
			{players.map((player, index) => (
				<div key={index}>
					<label>Giocatore {index + 1}:</label>
					<input
						type="text"
						value={player}
						onChange={(e) => handlePlayerNameChange(index, e.target.value)}
						onKeyDown={(e) => handleKeyPress(e, index)}
						ref={index === players.length - 1 ? lastInputRef : null}
					/>
					{players.length > minPlayers ? (
						<button
							onClick={() => removePlayer(index)}
							className="text-red-500"
						>
							x
						</button>
					) : null}
				</div>
			))}
			{error && <p className="text-red-500">{error}</p>}
			{prevStep && <button onClick={prevStep}>Indietro</button>}
			<button onClick={addPlayer}>Crea nuovo giocatore</button>
			{nextStep != null ? (
				players.length >= minPlayers ? (
					!players.some((name) => name.trim() === "" || !!error) ? (
						<button onClick={nextStep}>Avanti</button>
					) : null
				) : null
			) : null}
		</div>
	);
};

export default PlayerSetup;
