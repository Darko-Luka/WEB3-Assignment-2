<template>
	<ol class="flex items-center gap-4 bg-gray-300/25 p-4 mb-8 w-[80%] overflow-x-auto">
		<li
			class="cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all ease-in first:ml-auto last:mr-auto"
			v-for="card in cards"
		>
			<CardComponent :card="card" />
		</li>
	</ol>
</template>

<script setup lang="ts">
import type { Card } from "@/lib/utils";
import { defineProps } from "vue";
import CardComponent from "./CardComponent.vue";

const props = defineProps<{
	cards: Array<Card>;
}>();
</script>
