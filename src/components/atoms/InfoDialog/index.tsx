import instructions from "../../../decks/instruction.json";

export default function InfoDialog() {
	return (
		<>
			<p className="my-5 text-center uppercase w-[80%] m-auto font-semibold whitespace-pre-line text-sm">
				{instructions.general}
			</p>
			<div className="w-[88%] mx-6 h-[2px] bg-[#b10015]" />
			<div className="grid mb-2">
				{Object.values(instructions.levels).map(({ label, content }) => (
					<div className="mx-6 mt-4" key={label}>
						<p className="px-2 mb-1 text-xs text-[#c10016] uppercase bg-slate-300 w-fit font-semibold">
							{label}
						</p>
						<p className="text-sm font-semibold">{content}</p>
					</div>
				))}
			</div>
		</>
	);
}
