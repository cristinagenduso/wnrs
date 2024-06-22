/// <reference types="vite-plugin-svgr/client" />
import CardViewer from "@molecules/CardViewer";
import Decks from "@organisms/Decks";
import Players from "@organisms/Players";
import { FC, useEffect, useState } from "react";
import bumbleBFF from "../src/decks/crossover/bumbleBFF.json";
import bumbleBizz from "../src/decks/crossover/bumbleBizz.json";
import bumbleDate from "../src/decks/crossover/bumbleDate.json";
import cann from "../src/decks/crossover/cann.json";
import hbomax from "../src/decks/crossover/hboMax.json";
import valentino from "../src/decks/crossover/valentino.json";
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

const App: FC = () => {
	const decks: Deck[] = [
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
		Main: {
			displayName: "Main Deck",
			decks: [main],
		},
		Expansions: {
			displayName: "Expansion",
			decks: [couples, family, honestDating, innerCircle, ownIt, relationship],
		},
		Self: {
			displayName: "One Player +",
			decks: [breakup, forgiveness, healing, selfLove, selfReflection],
		},
		Online: {
			displayName: "Online Released",
			decks: [exfriend, quarantine, raceAndPrivilege, sneakyLink, voting],
		},
		Crossover: {
			displayName: "Crossover",
			decks: [bumbleBFF, bumbleBizz, bumbleDate, cann, hbomax, valentino],
		},
	};

	const [step, setStep] = useState<number>(0);
	const [selectedDecks, setSelectedDecks] = useState<string[]>(["Main"]);
	const [players, setPlayers] = useState<string[]>([]);
	const [theme, setTheme] = useState<string>("main");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = (newTheme) => {
		setTheme(newTheme);
	};

	const nextStep = () => setStep((prevStep) => prevStep + 1);
	const prevStep = () => setStep((prevStep) => prevStep - 1);

	return (
		<div
			className={`h-[calc(100dvh)] max-h-screen relative ${
				step === 3 ? `${theme} bg-main` : "bg-white"
			}`}
		>
			{step === 0 && (
				<div className="absolute -translate-x-1/2 -translate-y-1/2 tranform top-1/2 left-1/2 w-fit">
					<h1 className="text-3xl font-bold tracking-wide uppercase">
						We&apos;re Not
						<br />
						Really
						<br />
						Strangers
					</h1>
					<div className="flex flex-row mt-3 w-fit group">
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
			{step === 1 && (
				<Decks
					decks={decks}
					categories={categories}
					selectedDecks={selectedDecks}
					setSelectedDecks={setSelectedDecks}
					nextStep={nextStep}
					prevStep={prevStep}
					theme={theme}
				/>
			)}
			{step === 2 && (
				<Players
					players={players}
					setPlayers={setPlayers}
					nextStep={nextStep}
					prevStep={prevStep}
					minPlayers={1}
					theme={theme}
				/>
			)}
			{step === 3 && (
				<CardViewer
					decks={decks}
					selectedDecks={selectedDecks}
					setSelectedDecks={setSelectedDecks}
					players={players}
					setPlayers={setPlayers}
					prevStep={() => setStep(0)}
					theme={theme}
					toggleTheme={toggleTheme}
					categories={categories}
				/>
			)}
		</div>
	);
};

export default App;
