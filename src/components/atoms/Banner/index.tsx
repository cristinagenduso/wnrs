export default function Banner(props) {
	return (
		<div
			className="absolute hidden w-[65%] transform -translate-x-1/2 -translate-y-72 left-1/2"
			id={props.id}
		>
			<div className="flex flex-row bg-[#228b22] text-white rounded-2xl items-center py-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="mx-3 size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
				<p>Text copied!</p>
			</div>
		</div>
	);
}
