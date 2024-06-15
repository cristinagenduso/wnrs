import Banner from "@atoms/Banner";
import DeckSelection from "@atoms/DeckSelection";
import MenuItem from "@atoms/MenuItem";
import PlayerSetup from "@molecules/PlayerSetup";
import Palette from "@svg/color.svg?react";
import Copy from "@svg/copy.svg?react";
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
		<div className="grid grid-cols-5 w-[30%] m-auto text-[#c10016] mt-6 relative">
			<MenuItem
				handleClick={handleInfoClick}
				title="Istruzioni"
				icon={
					<Info className="hover:text-[#E9C5C5] w-6 aspect-square mx-auto" />
				}
				show={showInfo}
			>
				Istruzionishofmels
			</MenuItem>
			<MenuItem
				handleClick={handleDecksClick}
				title="Decks"
				icon={<Deck className="hover:text-[#E9C5C5] w-6 h-6 mx-auto" />}
				show={showDecks}
			>
				<DeckSelection
					decks={decks}
					selectedDecks={selectedDecks}
					setSelectedDecks={setSelectedDecks}
				/>
			</MenuItem>
			<MenuItem
				handleClick={copyText}
				icon={
					!copied ? (
						<Copy className="hover:text-[#E9C5C5] w-6 aspect-square mx-auto" />
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 mx-auto aspect-square"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 12.75 6 6 9-13.5"
							/>
						</svg>
					)
				}
			/>
			<MenuItem
				handleClick={handlePlayersClick}
				show={showPlayers}
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="mx-auto size-6 hover:text-[#E9C5C5]"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
						/>
					</svg>
				}
			>
				<PlayerSetup setPlayers={setPlayers} players={players} />
			</MenuItem>
			<MenuItem
				handleClick={handlePaletteClick}
				title="Palette"
				icon={
					<Palette className="hover:text-[#E9C5C5] w-6 aspect-square mx-auto" />
				}
				show={showPalette}
			>
				Provaahahaahdgjfmrmcl
			</MenuItem>
			<Banner id="form-banner" />
		</div>
	);
};

export default Menu;
