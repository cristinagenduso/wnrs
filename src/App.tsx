/// <reference types="vite-plugin-svgr/client" />
import CardViewer from "@molecules/CardViewer";
import Decks from "@organisms/Decks";
import Lobby from "@organisms/Lobby";
import ModeSelection from "@organisms/ModeSelection";
import Players from "@organisms/Players";
import RoomSetup from "@organisms/RoomSetup";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import bumbleBFF from "../src/decks/crossover/bumbleBFF.json";
import bumbleBizz from "../src/decks/crossover/bumbleBizz.json";
import bumbleDate from "../src/decks/crossover/bumbleDate.json";
import cann from "../src/decks/crossover/cann.json";
import hbomax from "../src/decks/crossover/hboMax.json";
import valentino from "../src/decks/crossover/valentino.json";
import icebreaker from "../src/decks/custom/icebreaker.json";
import couples from "../src/decks/expansion/couples.json";
import family from "../src/decks/expansion/family.json";
import honestDating from "../src/decks/expansion/honestDating.json";
import innerCircle from "../src/decks/expansion/innerCircle.json";
import ownIt from "../src/decks/expansion/ownIt.json";
import relationship from "../src/decks/expansion/relationship.json";
import main from "../src/decks/mainDeck/main.json";
import exfriend from "../src/decks/online/exfriend.json";
import quarantine from "../src/decks/online/quarantine.json";
import raceAndPrivilege from "../src/decks/online/raceAndPrivilege.json";
import sneakyLink from "../src/decks/online/sneaky.json";
import voting from "../src/decks/online/voting.json";
import breakup from "../src/decks/self/breakup.json";
import forgiveness from "../src/decks/self/forgiveness.json";
import healing from "../src/decks/self/healing.json";
import selfLove from "../src/decks/self/selfLove.json";
import selfReflection from "../src/decks/self/selfReflection.json";
import { useRoom } from "./hooks/useRoom";

type Deck = {
	name: string;
	short_name: string;
	players: string;
	theme: string;
	levels: string[];
	isExpansion: boolean;
	backDesc?: string[];
	preview?: string[];
	questions: string[][];
};

interface Category {
	displayName: string;
	decks: Deck[];
}

/*
 * Steps:
 * 0 - Landing
 * 1 - Mode Selection (Online / Local)
 * 2 - Room Setup (Online only: Create / Join)
 * 3 - Lobby (Online only: waiting for other player)
 * 4 - Deck Selection
 * 5 - Player Names (Local only)
 * 6 - Card Viewer (Game)
 */

const App: FC = () => {
	const decks: Deck[] = [
		icebreaker,
		breakup,
		bumbleBFF,
		bumbleBizz,
		bumbleDate,
		cann,
		couples,
		exfriend,
		family,
		forgiveness,
		hbomax,
		healing,
		honestDating,
		innerCircle,
		main,
		ownIt,
		quarantine,
		raceAndPrivilege,
		relationship,
		selfLove,
		selfReflection,
		sneakyLink,
		valentino,
		voting,
	];

	const categories: { [category: string]: Category } = {
		Custom: {
			displayName: "✦ Unmasked Originals",
			decks: [icebreaker],
		},
		Main: {
			displayName: "Main Deck",
			decks: [main],
		},
		Expansions: {
			displayName: "Expansion",
			decks: [couples, family, honestDating, innerCircle, ownIt, relationship],
		},
		Online: {
			displayName: "Online Released",
			decks: [exfriend, quarantine, raceAndPrivilege, sneakyLink, voting],
		},
		Crossover: {
			displayName: "Crossover",
			decks: [bumbleBFF, bumbleBizz, bumbleDate, cann, hbomax, valentino],
		},
		Self: {
			displayName: "One Player +",
			decks: [breakup, forgiveness, healing, selfLove, selfReflection],
		},
	};

	const [step, setStep] = useState<number>(0);
	const [selectedDecks, setSelectedDecks] = useState<string[]>(["Icebreaker"]);
	const [players, setPlayers] = useState<string[]>([]);
	const [theme, setTheme] = useState<string>("main");
	const [gameMode, setGameMode] = useState<"online" | "local" | null>(null);

	// Online room management
	const {
		roomCode,
		roomState,
		isHost,
		isConnected,
		error: roomError,
		createRoom,
		joinRoom,
		updateGameState,
		startGame,
		leaveRoom,
	} = useRoom();

	// Check for room code in URL on mount (deep link support)
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const roomParam = params.get("room");
		if (roomParam) {
			setGameMode("online");
			setStep(2); // Go directly to room setup (join mode)
		}
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	// Sync online game state
	useEffect(() => {
		if (roomState?.started && gameMode === "online" && step < 6) {
			// If we're the guest and host started, jump to deck selection or game
			if (!isHost && roomState.started) {
				setSelectedDecks(roomState.selectedDecks);
				setPlayers([roomState.hostName, roomState.guestName]);
				setStep(6);
			}
		}
	}, [roomState?.started, gameMode, isHost, step, roomState]);

	const toggleTheme = (newTheme: string) => {
		setTheme(newTheme);
	};

	const nextStep = () => setStep((prevStep) => prevStep + 1);
	const prevStep = () => setStep((prevStep) => prevStep - 1);

	const handleSelectOnline = () => {
		setGameMode("online");
		setStep(2);
	};

	const handleSelectLocal = () => {
		setGameMode("local");
		setStep(4); // Skip to deck selection
	};

	const handleCreateRoom = async (playerName: string) => {
		try {
			await createRoom(playerName, selectedDecks);
			setPlayers([playerName]);
			setStep(3); // Go to lobby
		} catch {
			// Error is handled in the hook
		}
	};

	const handleJoinRoom = async (code: string, playerName: string) => {
		const success = await joinRoom(code, playerName);
		if (success) {
			setPlayers((prev) => [...prev, playerName]);
			setStep(3); // Go to lobby
		}
	};

	const handleStartOnlineGame = async () => {
		if (roomState) {
			// Update room with final deck selection and player list
			await updateGameState({
				selectedDecks,
				started: true,
			});
			setPlayers([roomState.hostName, roomState.guestName]);
			setStep(6);
		}
	};

	const handleLeaveRoom = () => {
		leaveRoom();
		setStep(0);
		setGameMode(null);
	};

	// Online: After deck selection, go to lobby to start game
	const handleOnlineDeckNext = () => {
		if (gameMode === "online" && isHost && roomState) {
			updateGameState({ selectedDecks });
			setStep(3); // Back to lobby to start
		}
	};

	const goHome = useCallback(() => {
		leaveRoom();
		setStep(0);
		setGameMode(null);
		setSelectedDecks(["Icebreaker"]);
		setPlayers([]);
	}, [leaveRoom]);

	// Get seed for online games
	const gameSeed = useMemo(() => {
		if (gameMode === "online" && roomState) {
			return roomState.seed;
		}
		return undefined;
	}, [gameMode, roomState]);

	return (
		<div
			className={`h-[calc(100dvh)] max-h-screen relative ${
				step === 6 ? `${theme} bg-main` : "bg-white"
			}`}
		>
			{/* Step 0 — Landing */}
			{step === 0 && (
				<div className="absolute -translate-x-1/2 -translate-y-1/2 transform top-1/2 left-1/2 w-fit">
					<h1 className="text-4xl font-bold tracking-wider uppercase animate-fadeIn">
						Unmasked
					</h1>
					<p className="text-sm text-gray-400 mt-1 tracking-wide text-center animate-fadeIn animation-delay-200">
						Drop the small talk.
					</p>
					<div className="flex flex-row mt-4 w-fit group mx-auto">
						<button
							onClick={nextStep}
							className="font-bold uppercase text-main"
						>
							New Game
						</button>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className={`group-hover:text-main ml-[2px] size-6 my-auto aspect-square ${theme} laptop:text-transparent text-main transform group-hover:translate-x-2 duration-300 ease-in-out`}
						>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
						</svg>
					</div>
				</div>
			)}

			{/* Step 1 — Mode Selection */}
			{step === 1 && (
				<ModeSelection
					onSelectOnline={handleSelectOnline}
					onSelectLocal={handleSelectLocal}
					theme={theme}
				/>
			)}

			{/* Step 2 — Room Setup (Online) */}
			{step === 2 && gameMode === "online" && (
				<RoomSetup
					onCreateRoom={handleCreateRoom}
					onJoinRoom={handleJoinRoom}
					error={roomError}
					theme={theme}
					prevStep={() => setStep(1)}
				/>
			)}

			{/* Step 3 — Lobby (Online) */}
			{step === 3 && gameMode === "online" && roomState && (
				<Lobby
					roomCode={roomState.code}
					hostName={roomState.hostName}
					guestName={roomState.guestName}
					isHost={isHost}
					onStart={handleStartOnlineGame}
					onLeave={handleLeaveRoom}
					theme={theme}
				/>
			)}

			{/* Step 4 — Deck Selection */}
			{step === 4 && (
				<Decks
					decks={decks}
					categories={categories}
					selectedDecks={selectedDecks}
					setSelectedDecks={setSelectedDecks}
					nextStep={gameMode === "online" ? handleOnlineDeckNext : nextStep}
					prevStep={gameMode === "online" ? () => setStep(3) : () => setStep(1)}
					theme={theme}
				/>
			)}

			{/* Step 5 — Players (Local only) */}
			{step === 5 && gameMode === "local" && (
				<Players
					players={players}
					setPlayers={setPlayers}
					nextStep={nextStep}
					prevStep={prevStep}
					minPlayers={1}
					theme={theme}
				/>
			)}

			{/* Step 6 — Card Viewer (Game) */}
			{step === 6 && (
				<CardViewer
					decks={decks}
					selectedDecks={selectedDecks}
					setSelectedDecks={setSelectedDecks}
					players={players}
					setPlayers={setPlayers}
					prevStep={goHome}
					theme={theme}
					toggleTheme={toggleTheme}
					categories={categories}
					isOnline={gameMode === "online"}
					roomState={roomState}
					isHost={isHost}
					updateGameState={updateGameState}
					seed={gameSeed}
				/>
			)}
		</div>
	);
};

export default App;
