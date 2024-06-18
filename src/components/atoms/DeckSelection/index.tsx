import InfoDialog from "@atoms/InfoDialog";
import Deck from "@svg/icon.svg?react";
import { FC, useState } from "react";
import { DeckSelectionProps } from "./index.types";

const DeckSelection: FC<DeckSelectionProps> = ({
	categories,
	selectedDecks,
	setSelectedDecks,
}) => {
	const toggleDeck = (name: string) => {
		setSelectedDecks((prev) =>
			prev.includes(name)
				? prev.filter((prevSlug) => prevSlug !== name)
				: [...prev, name]
		);
	};

	const [open, setOpen] = useState(false);
	const [openDeckId, setOpenDeckId] = useState(null);

	const handleClick = (deckId) => {
		setOpenDeckId(deckId);
		setOpen(!open);
	};

	const CheckIcon = ({ selected }: { selected: boolean }) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={`h-4 w-4 mr-2 my-auto col-start-1 group-hover:text-paper group-hover:stroke-2 ${
				selected ? "text-paper stroke-2" : "text-transparent cursor-default"
			}`}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 12.75 6 6 9-13.5"
			/>
		</svg>
	);

	return (
		<div className="h-[80vh] sm:py-8 mx-auto overflow-y-scroll sm:deck-list-selection">
			<div className="w-[90%] p-2 float-right">
				{Object.values(categories).map((category) => (
					<div key={category.displayName} className="mb-2">
						<h3 className="text-xs font-semibold uppercase text-paper">
							{category.displayName}
						</h3>
						{category.decks.map((deck) => (
							<div key={deck.short_name} className="grid grid-cols-6 pl-2 mt-1">
								<label
									htmlFor={deck.short_name}
									className="flex col-span-3 cursor-pointer group"
								>
									<input
										type="checkbox"
										id={deck.short_name}
										checked={selectedDecks.includes(deck.short_name)}
										onChange={() => toggleDeck(deck.short_name)}
										className="appearance-none"
									/>
									<CheckIcon
										selected={selectedDecks.includes(deck.short_name)}
									/>
									<p className="my-auto text-sm font-semibold uppercase select-none text-paper hover:underline h-fit">
										{deck.short_name}
									</p>
								</label>
								<div className="grid grid-cols-3 col-span-2 col-start-5 justify-self-end">
									<button onClick={() => handleClick(deck.short_name)}>
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											className="m-auto mr-2 text-paper size-5 opacity-80"
										>
											<path d="M0 0h24v24H0V0z" fill="none" />
											<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
										</svg>
									</button>
									{openDeckId === deck.short_name && (
										<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60">
											<div className="p-4 bg-red-500 rounded shadow-lg">
												<InfoDialog
													backDesc={deck.backDesc}
													preview={deck.preview}
												/>
												<button
													onClick={() => handleClick(null)}
													className="p-2 mt-4 bg-red-500 rounded text-paper"
												>
													Close Info Dialog
												</button>
											</div>
										</div>
									)}
									{deck.players === "1" ? (
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											className="m-auto text-paper size-5 opacity-80"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
										</svg>
									) : deck.players === "1+" ? (
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											className="m-auto text-paper size-5 opacity-80"
										>
											<path d="M13,8c0-2.21-1.79-4-4-4S5,5.79,5,8s1.79,4,4,4S13,10.21,13,8z M15,10v2h3v3h2v-3h3v-2h-3V7h-2v3H15z M1,18v2h16v-2 c0-2.66-5.33-4-8-4S1,15.34,1,18z" />
										</svg>
									) : deck.players === "2" ? (
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											className="m-auto text-paper size-5 opacity-80"
										>
											<path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z" />
											<circle cx="9" cy="8" r="4" />
											<path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z" />
											<path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z" />
										</svg>
									) : deck.players === "2+" ? (
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											className="m-auto text-paper size-5 opacity-80"
										>
											<polygon points="22,9 22,7 20,7 20,9 18,9 18,11 20,11 20,13 22,13 22,11 24,11 24,9" />
											<path d="M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z" />
											<path d="M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z" />
											<path d="M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z" />
											<path d="M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z" />
										</svg>
									) : null}
									{deck.isExpansion ? (
										<Deck className="m-auto text-paper size-5 opacity-80" />
									) : null}
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default DeckSelection;
