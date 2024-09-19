import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type CardType = "Skip" | "Numbered" | "Reverse" | "Draw" | "Wild" | "Wild_Draw" | "Deck";
export type CardColor = "Blue" | "Green" | "Red" | "Yellow";
export type Card = {
	type: CardType;
	color?: CardColor;
	number?: String;
};
