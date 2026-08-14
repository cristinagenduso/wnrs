/**
 * Seeded pseudo-random number generator (mulberry32).
 * Given the same seed, always produces the same sequence of numbers.
 * This ensures both online players see the same card order.
 */
export function seededRandom(seed: number): () => number {
	return function () {
		let t = (seed += 0x6d2b79f5);
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

/**
 * Deterministic shuffle using a seeded PRNG.
 * Given the same array and seed, always produces the same result.
 */
export function seededShuffle<T>(array: T[], seed: number): T[] {
	const rng = seededRandom(seed);
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

/**
 * Generate a short room code (6 uppercase alphanumeric characters).
 */
export function generateRoomCode(): string {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Removed ambiguous chars (I,O,0,1)
	let code = "";
	for (let i = 0; i < 6; i++) {
		code += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return code;
}

/**
 * Check if a question is marked as in-person only.
 * Questions prefixed with "[IRL] " are for in-person play only.
 */
export function isInPersonOnly(question: string): boolean {
	return question.startsWith("[IRL] ");
}

/**
 * Strip the [IRL] prefix from a question for display.
 */
export function stripIrlPrefix(question: string): string {
	return question.replace(/^\[IRL\] /, "");
}

/**
 * Filter out in-person-only questions when playing online.
 */
export function filterForOnline(questions: string[][]): string[][] {
	return questions.map((level) =>
		level.filter((q) => !isInPersonOnly(q))
	);
}
