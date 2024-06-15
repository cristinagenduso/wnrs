import Button from "@atoms/Button";
import Deck from "@svg/icon.svg?react";
import { FC } from "react";
import { DecksProps } from "./index.types";

const Decks: FC<DecksProps> = ({
	categories,
	selectedDecks,
	setSelectedDecks,
	nextStep,
	prevStep,
}) => {
	const toggleDeck = (name: string) => {
		setSelectedDecks((prev) =>
			prev.includes(name)
				? prev.filter((prevSlug) => prevSlug !== name)
				: [...prev, name]
		);
	};

	const CheckIcon = ({ selected }: { selected: boolean }) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={`h-6 w-6 mr-2 col-start-1 ${
				selected ? "text-[#c10016] stroke-2" : "text-transparent cursor-default"
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
		<div className="mx-auto mt-20">
			<h2 className="bg-[#c10016] text-white pl-4 py-2 uppercase font-semibold w-1/2 m-auto">
				decks
			</h2>
			<p className="w-1/2 m-auto mt-2 mb-10">
				Don't worry. You may change this later :)
			</p>
			{Object.values(categories).map((category) => (
				<div key={category.displayName} className="mb-10">
					<h2 className="bg-[#c10016] text-white pl-4 py-2 uppercase font-semibold w-1/2 m-auto">
						{category.displayName}
					</h2>
					{category.decks.map((deck) => (
						<div
							key={deck.short_name}
							className="grid w-1/2 grid-cols-5 m-auto mt-1"
						>
							<label
								htmlFor={deck.short_name}
								className="flex col-span-3 cursor-pointer"
							>
								<input
									type="checkbox"
									id={deck.short_name}
									checked={selectedDecks.includes(deck.short_name)}
									onChange={() => toggleDeck(deck.short_name)}
									className="appearance-none"
								/>
								<CheckIcon selected={selectedDecks.includes(deck.short_name)} />
								<p className="select-none uppercase text-[#c10016] font-semibold">
									{deck.short_name}
								</p>
							</label>
							<div className="grid grid-cols-2 col-start-5 justify-self-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="mr-1 size-6 text-[#c10016]"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
									/>
								</svg>
								<Deck className="w-6 mx-auto aspect-square h-fit text-[#c10016]" />
							</div>
						</div>
					))}
				</div>
			))}
			<div className="w-[60%] grid grid-cols-2 mx-auto mt-20">
				<div className="place-items-start">
					<Button onClick={prevStep} text="back" />
				</div>
				{selectedDecks.length > 0 && (
					<div className="grid place-items-end">
						<Button onClick={nextStep} text="next" />
					</div>
				)}
			</div>
		</div>
	);
};

export default Decks;
