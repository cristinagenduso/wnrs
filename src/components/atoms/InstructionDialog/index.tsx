import instructions from "../../../decks/instruction.json";

export default function InstructionDialog() {
	return (
		<>
			<p className="my-5 text-center uppercase sm:w-[80%] m-auto font-semibold whitespace-pre-line text-sm tracking-wide">
				{instructions.general}
			</p>
			<div className="w-[88%] mx-6 h-[2px] bg-black/20" />
			<div className="grid mb-2">
				{Object.values(instructions.levels).map(({ label, content }) => (
					<div className="mx-6 mt-4" key={label}>
						<p className="px-2 mb-1 text-xs font-semibold text-black uppercase bg-paper w-fit">
							{label}
						</p>
						<p className="text-sm font-semibold tracking-wide">{content}</p>
					</div>
				))}
			</div>
		</>
	);
}
