import { useCallback, useMemo, useState } from "react";
import { seededShuffle, filterForOnline, stripIrlPrefix } from "../util/gameUtils";

interface Deck {
	name: string;
	short_name: string;
	players: string;
	theme: string;
	levels: string[];
	isExpansion: boolean;
	backDesc?: string[];
	preview?: string[];
	questions: string[][];
}

interface UseGameStateProps {
	decks: Deck[];
	selectedDecks: string[];
	players: string[];
	seed?: number;
	isOnline?: boolean;
	initialCardIndex?: number;
	initialLevelIndex?: number;
	initialPlayerIndex?: number;
}

interface UseGameStateReturn {
	allLevels: string[][];
	currentLevelCards: string[];
	currentCardIndex: number;
	currentLevelIndex: number;
	currentPlayerIndex: number;
	currentCardText: string;
	isFlipping: boolean;
	nextCard: () => { cardIndex: number; levelIndex: number; playerIndex: number } | null;
	prevCard: () => { cardIndex: number; levelIndex: number; playerIndex: number } | null;
	nextLevel: () => { cardIndex: number; levelIndex: number; playerIndex: number } | null;
	prevLevel: () => { cardIndex: number; levelIndex: number; playerIndex: number } | null;
	setIndices: (cardIndex: number, levelIndex: number, playerIndex: number) => void;
	canGoNext: boolean;
	canGoPrev: boolean;
	canGoNextLevel: boolean;
	canGoPrevLevel: boolean;
}

export function useGameState({
	decks,
	selectedDecks,
	players,
	seed,
	isOnline = false,
	initialCardIndex = 0,
	initialLevelIndex = 0,
	initialPlayerIndex = 0,
}: UseGameStateProps): UseGameStateReturn {
	const [currentCardIndex, setCurrentCardIndex] = useState(initialCardIndex);
	const [currentLevelIndex, setCurrentLevelIndex] = useState(initialLevelIndex);
	const [currentPlayerIndex, setCurrentPlayerIndex] = useState(initialPlayerIndex);
	const [isFlipping, setIsFlipping] = useState(false);

	// Build and shuffle all levels from selected decks
	const allLevels = useMemo(() => {
		const levelsMap: { [key: number]: string[] } = {};

		selectedDecks.forEach((deckId) => {
			const deck = decks.find((m) => m.short_name === deckId);
			if (deck) {
				deck.questions.forEach((levelQuestions, idx) => {
					if (!levelsMap[idx]) {
						levelsMap[idx] = [];
					}
					levelsMap[idx] = levelsMap[idx].concat(levelQuestions);
				});
			}
		});

		// Filter out IRL questions if playing online
		let levels = Object.values(levelsMap).filter((level) => level.length > 0);
		if (isOnline) {
			levels = filterForOnline(levels);
		}

		// Shuffle: use seed if provided (for online sync), otherwise random
		const shuffleSeed = seed ?? Math.floor(Math.random() * 2147483647);
		levels = levels.map((level, idx) =>
			seededShuffle(level, shuffleSeed + idx)
		);

		return levels;
	}, [selectedDecks, decks, seed, isOnline]);

	const currentLevelCards = allLevels[currentLevelIndex] || [];

	// Get current card text (stripping IRL prefix if needed for display)
	const currentCardText = useMemo(() => {
		const raw = currentLevelCards[currentCardIndex] || "";
		return stripIrlPrefix(raw);
	}, [currentLevelCards, currentCardIndex]);

	const triggerFlip = useCallback(() => {
		setIsFlipping(true);
		setTimeout(() => setIsFlipping(false), 400);
	}, []);

	const nextCard = useCallback(() => {
		if (currentCardIndex < currentLevelCards.length - 1) {
			const newCardIndex = currentCardIndex + 1;
			const newPlayerIndex = (currentPlayerIndex + 1) % players.length;
			setCurrentCardIndex(newCardIndex);
			setCurrentPlayerIndex(newPlayerIndex);
			triggerFlip();
			return { cardIndex: newCardIndex, levelIndex: currentLevelIndex, playerIndex: newPlayerIndex };
		} else if (currentLevelIndex < allLevels.length - 1) {
			const newLevelIndex = currentLevelIndex + 1;
			const newPlayerIndex = (currentPlayerIndex + 1) % players.length;
			setCurrentLevelIndex(newLevelIndex);
			setCurrentCardIndex(0);
			setCurrentPlayerIndex(newPlayerIndex);
			triggerFlip();
			return { cardIndex: 0, levelIndex: newLevelIndex, playerIndex: newPlayerIndex };
		}
		return null;
	}, [currentCardIndex, currentLevelCards.length, currentLevelIndex, currentPlayerIndex, players.length, allLevels.length, triggerFlip]);

	const prevCard = useCallback(() => {
		if (currentCardIndex > 0) {
			const newCardIndex = currentCardIndex - 1;
			const newPlayerIndex = (currentPlayerIndex - 1 + players.length) % players.length;
			setCurrentCardIndex(newCardIndex);
			setCurrentPlayerIndex(newPlayerIndex);
			triggerFlip();
			return { cardIndex: newCardIndex, levelIndex: currentLevelIndex, playerIndex: newPlayerIndex };
		} else if (currentLevelIndex > 0) {
			const newLevelIndex = currentLevelIndex - 1;
			const prevLevelCards = allLevels[newLevelIndex];
			const newCardIndex = prevLevelCards.length - 1;
			const newPlayerIndex = (currentPlayerIndex - 1 + players.length) % players.length;
			setCurrentLevelIndex(newLevelIndex);
			setCurrentCardIndex(newCardIndex);
			setCurrentPlayerIndex(newPlayerIndex);
			triggerFlip();
			return { cardIndex: newCardIndex, levelIndex: newLevelIndex, playerIndex: newPlayerIndex };
		}
		return null;
	}, [currentCardIndex, currentLevelIndex, currentPlayerIndex, players.length, allLevels, triggerFlip]);

	const nextLevel = useCallback(() => {
		if (currentLevelIndex < allLevels.length - 1) {
			const newLevelIndex = currentLevelIndex + 1;
			const newPlayerIndex = (currentPlayerIndex + 1) % players.length;
			setCurrentLevelIndex(newLevelIndex);
			setCurrentCardIndex(0);
			setCurrentPlayerIndex(newPlayerIndex);
			triggerFlip();
			return { cardIndex: 0, levelIndex: newLevelIndex, playerIndex: newPlayerIndex };
		}
		return null;
	}, [currentLevelIndex, allLevels.length, currentPlayerIndex, players.length, triggerFlip]);

	const prevLevel = useCallback(() => {
		if (currentLevelIndex > 0) {
			const newLevelIndex = currentLevelIndex - 1;
			const prevLevelCards = allLevels[newLevelIndex];
			const newCardIndex = prevLevelCards.length - 1;
			const newPlayerIndex = (currentPlayerIndex + 1) % players.length;
			setCurrentLevelIndex(newLevelIndex);
			setCurrentCardIndex(newCardIndex);
			setCurrentPlayerIndex(newPlayerIndex);
			triggerFlip();
			return { cardIndex: newCardIndex, levelIndex: newLevelIndex, playerIndex: newPlayerIndex };
		}
		return null;
	}, [currentLevelIndex, allLevels, currentPlayerIndex, players.length, triggerFlip]);

	const setIndices = useCallback(
		(cardIndex: number, levelIndex: number, playerIndex: number) => {
			if (cardIndex !== currentCardIndex || levelIndex !== currentLevelIndex) {
				triggerFlip();
			}
			setCurrentCardIndex(cardIndex);
			setCurrentLevelIndex(levelIndex);
			setCurrentPlayerIndex(playerIndex);
		},
		[currentCardIndex, currentLevelIndex, triggerFlip]
	);

	return {
		allLevels,
		currentLevelCards,
		currentCardIndex,
		currentLevelIndex,
		currentPlayerIndex,
		currentCardText,
		isFlipping,
		nextCard,
		prevCard,
		nextLevel,
		prevLevel,
		setIndices,
		canGoNext: currentCardIndex < currentLevelCards.length - 1 || currentLevelIndex < allLevels.length - 1,
		canGoPrev: currentCardIndex > 0 || currentLevelIndex > 0,
		canGoNextLevel: currentLevelIndex < allLevels.length - 1,
		canGoPrevLevel: currentLevelIndex > 0,
	};
}
