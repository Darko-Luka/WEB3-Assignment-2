import type { CardColor, Deck } from "@/model/deck";
import type { UnoFailure } from "@/model/hand";

export type Player = {
	index: number;
	name: string;
};

export interface EngineInterface {
	createGame(playerCount: number): Array<Player>;
	getPlayerName(index: number): string | undefined;
	getPlayerScore(index: number): number | undefined;
	getPlayerDeck(index: number): Deck | undefined;
	getCurrentPlayer(): Player;
	play(cardIndex: number, nextColor?: CardColor): Deck;
	discardPile(): Deck;
	drawPile(): Deck;
	sayUno(index: number): void;
	catchUnoFailure(unoFailure: UnoFailure): boolean;
	getWinner(): number | undefined;
}
