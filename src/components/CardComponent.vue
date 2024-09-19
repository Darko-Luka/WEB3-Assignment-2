<template>
	<img class="min-w-28 max-w-28" :src="getImgUrl()" :alt="getCardName()" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Card } from "@/lib/utils";

const props = defineProps<{
	card: Card;
}>();

function getImgUrl() {
	return `/src/assets/cards/${getCardName()}.png`;
}

function getCardName() {
	if (props.card.type === "Wild" || props.card.type === "Wild_Draw" || props.card.type === "Deck")
		return props.card.type;

	if (props.card.type === "Skip" || props.card.type === "Reverse" || props.card.type === "Draw")
		return `${props.card.color}_${props.card.type}`;

	return `${props.card.color}_${props.card.number}`;
}
</script>
