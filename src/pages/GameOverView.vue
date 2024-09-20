<template>
	<div class="flex justify-center items-center flex-col">
		<h1 class="text-4xl">Player X has won!</h1>
		<ol class="my-4 text-lg">
			<li class="" v-for="player in players">
				<span class="font-bold">{{ player.name }}</span> - {{ player.score }}
			</li>
		</ol>
		<RouterLink to="/">
			<Button size="lg" class="my-4"> Play again </Button>
		</RouterLink>
	</div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const players = ref<Array<{ name: String; score: Number }>>([
	{
		name: "Sad boy",
		score: 350,
	},
	{
		name: "Sam u sobi",
		score: 250,
	},
	{
		name: "1 mil before 30",
		score: 150,
	},
	{
		name: "48 laws of power",
		score: 50,
	},
]);
</script>
