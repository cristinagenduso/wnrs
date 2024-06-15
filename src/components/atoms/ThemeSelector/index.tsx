const ThemeSelector = ({ theme, toggleTheme }) => {
	return (
		<div>
			<button
				className={
					theme == "dark"
						? `px-4 py-2 rounded bg-gray-800`
						: `px-4 py-2 rounded bg-gray-200`
				}
				onClick={toggleTheme}
			>
				Toggle Theme
			</button>
			<p>Current Theme: {theme}</p>
		</div>
	);
};

export default ThemeSelector;
