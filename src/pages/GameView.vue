<template>
	<div class="w-full h-[720px] flex flex-col justify-between table-image">
		<div class="flex items-center justify-between w-1/2 mx-auto p-6">
			<OpponentAvatar :isActive="true" name="Bot 1" />
			<OpponentAvatar :isActive="false" name="Bot 2" />
			<OpponentAvatar :isActive="false" name="Bot 3" />
		</div>

		<div class="flex flex-row gap-64 justify-center">
			<div>
				<h1 class="ml-4 mb-2 text-white text-xl">Draw Pile</h1>
				<img
					class="max-w-32 cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all ease-in"
					src="../assets/cards/Deck.png"
				/>
			</div>

			<div>
				<h1 class="ml-2 mb-2 text-white text-xl">Discard Pile</h1>
				<div
					class="min-w-32 max-w-32 bg-gray-400 h-[185.39px] rounded-lg cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all ease-in"
				></div>
			</div>
		</div>

		<div class="flex items-center justify-center space-x-2">
			<PlayerDeck
				:cards="[
					{ type: 'Wild' },
					{ type: 'Wild' },
					{ type: 'Wild' },
					{ type: 'Wild' },
					{ type: 'Wild' },
					{ type: 'Wild' },
					{ type: 'Wild' },
				]"
			/>
			<Label class="text-white text-xl">Score: 450 </Label>
		</div>
	</div>
</template>

<script setup lang="ts">
import OpponentAvatar from "@/components/OpponentAvatar.vue";
import PlayerDeck from "@/components/PlayerDeck.vue";
import Label from "@/components/ui/label/Label.vue";
</script>

<style scoped>
.table-image {
	background-image: url("../assets/cards/Table_3.png");
}
</style>
