import { require } from "module-name";

export const Main = {
	displayName: "Main Deck",
	decks: require("./main"),
};

export const Expansions = {
	displayName: "Expansion",
	decks: require("./expansion"),
};
export const Self = {
	displayName: "One Player +",
	decks: require("./self"),
};
export const Online = {
	displayName: "Online Released",
	decks: require("./online"),
};
export const Crossover = {
	displayName: "Crossover",
	decks: require("./crossover"),
};
