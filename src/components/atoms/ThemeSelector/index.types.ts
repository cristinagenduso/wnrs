export interface ThemeSelectorProps {
	theme: string;
	toggleTheme: (theme: string) => void;
	onClose: () => void;
	defaultIndex?: number;
}
