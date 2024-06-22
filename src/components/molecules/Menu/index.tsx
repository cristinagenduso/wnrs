import DeckSelection from "@atoms/DeckSelection/index.js";
import InstructionDialog from "@atoms/InstructionDialog/index.js";
import MenuItem from "@atoms/MenuItem";
import ThemeSelector from "@atoms/ThemeSelector/index.js";
import PlayerSetup from "@molecules/PlayerSetup";
import Info from "@svg/help-circle-outline.svg?react";
import Deck from "@svg/icon.svg?react";
import { FC, useState } from "react";
import { getRawQuestion } from "../../../util/helperFn.js";
import { MenuProps } from "./index.types";

const Menu: FC<MenuProps> = ({
	textRef,
	selectedDecks,
	decks,
	setSelectedDecks,
	setPlayers,
	players,
	theme,
	toggleTheme,
	categories,
}) => {
	const [showInfo, setShowInfo] = useState(false);
	const [showDecks, setShowDecks] = useState(false);
	const [showPalette, setShowPalette] = useState(false);
	const [showPlayers, setShowPlayers] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleInfoClick = () => {
		setShowInfo(!showInfo);
	};

	const handleDecksClick = () => {
		setShowDecks(!showDecks);
	};

	const handlePaletteClick = () => {
		setShowPalette(!showPalette);
	};

	const handlePlayersClick = () => {
		setShowPlayers(!showPlayers);
	};

	const copyText = () => {
		navigator.clipboard.writeText(getRawQuestion(textRef));
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="grid grid-cols-5 w-[60%] laptop:w-[30%] m-auto text-contrastText/80 mt-6 relative">
			<MenuItem
				handleClick={handleInfoClick}
				title="How To Play"
				icon={
					<Info
						className={`hover:text-contrastText hover:bg-black/10 w-8 rounded-md p-1 aspect-square mx-auto ${theme}`}
					/>
				}
				show={showInfo}
				theme={theme}
			>
				<InstructionDialog />
			</MenuItem>
			<MenuItem
				handleClick={handleDecksClick}
				isDeck
				icon={
					<Deck
						className={`hover:text-contrastText hover:bg-black/10 size-8 rounded-md p-1 mx-auto ${theme}`}
					/>
				}
				show={showDecks}
				theme={theme}
			>
				<DeckSelection
					decks={decks}
					selectedDecks={selectedDecks}
					setSelectedDecks={setSelectedDecks}
					categories={categories}
					handleClick={handleDecksClick}
				/>
			</MenuItem>
			<MenuItem
				handleClick={copyText}
				icon={
					!copied ? (
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className={`hover:text-contrastText hover:bg-black/10 w-8 rounded-md p-1 aspect-square mx-auto ${theme}`}
						>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className={`w-8 rounded-md p-1 aspect-square mx-auto ${theme}`}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 12.75 6 6 9-13.5"
							/>
						</svg>
					)
				}
				theme={theme}
			/>
			<MenuItem
				handleClick={handlePlayersClick}
				show={showPlayers}
				title="change players"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className={`hover:text-contrastText hover:bg-black/10 w-8 rounded-md p-1 aspect-square mx-auto ${theme}`}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
						/>
					</svg>
				}
				theme={theme}
			>
				<PlayerSetup
					setPlayers={setPlayers}
					players={players}
					theme={theme}
					minPlayers={1}
				/>
			</MenuItem>
			<MenuItem
				handleClick={handlePaletteClick}
				title="CHANGE THEME"
				icon={
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className={`hover:text-contrastText hover:bg-black/10 w-8 rounded-md p-1 aspect-square mx-auto ${theme}`}
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" />
						<circle cx="6.5" cy="11.5" r="1.5" />
						<circle cx="9.5" cy="7.5" r="1.5" />
						<circle cx="14.5" cy="7.5" r="1.5" />
						<circle cx="17.5" cy="11.5" r="1.5" />
					</svg>
				}
				show={showPalette}
				theme={theme}
			>
				<ThemeSelector
					theme={theme}
					toggleTheme={toggleTheme}
					onClose={handlePaletteClick}
				/>
			</MenuItem>
		</div>
	);
};

export default Menu;
