import type { Card, CardColor } from "@/model/deck";
import { EngineService } from "@/model/engineService";
import type { EngineInterface, Player } from "@/model/interfaces/engineInterface";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGameStore = defineStore("game", () => {
	const players = ref<(Player & { isBot: boolean; deck: Card[] })[]>([]);
	const bots = computed(() => players.value.filter((player) => player.isBot));
	const engineService: EngineInterface = new EngineService();
	const currentPlayerIndex = ref(0);

	function createGame(bots: ("easy" | "medium" | "hard")[]) {
		const _players = engineService.createGame(bots);

		players.value = _players.map((player) => {
			return {
				...player,
				isBot: player.name.includes("bot"),
				deck: engineService.getPlayerDeck(player.index) ?? [],
			};
		});

		nextTurn();
	}

	function play(cardIndex: number, nextColor?: CardColor) {
		try {
			engineService.play(cardIndex, nextColor);
			updateAllPlayerDecks();
			nextTurn();
		} catch {
			alert("Illegal card play");
		}
	}

	function draw() {
		engineService.draw();
		updateAllPlayerDecks();
		nextTurn();
	}

	function getPlayerScore(index: number): number {
		return engineService.getPlayerScore(index) ?? 0;
	}

	function isPlayerInTurn(index: number): boolean {
		return index === currentPlayerIndex.value;
	}

	function makeBotMove() {
		setTimeout(() => {
			engineService.decideMove();
			updateAllPlayerDecks();
			nextTurn();
		}, 1000);
	}

	function nextTurn() {
		currentPlayerIndex.value = engineService.getCurrentPlayer().index;
		const currentPlayer = players.value[currentPlayerIndex.value];

		if (currentPlayer?.isBot) {
			makeBotMove();
		}
	}

	function updateAllPlayerDecks() {
		players.value.forEach((player) => {
			player.deck = engineService.getPlayerDeck(player.index) ?? [];
		});
	}

	return {
		createGame,
		getPlayerScore,
		isPlayerInTurn,
		play,
		draw,
		discardPileTopCard: engineService.getDiscardPileTopCard,
		players,
		bots,
	};
});
