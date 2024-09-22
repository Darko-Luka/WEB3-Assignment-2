<template>
	<div class="w-full h-[720px] flex flex-col justify-between table-image">
		<div class="flex justify-between items-center">
			<ScoreTarget :targetScore="500" />
			<div class="flex items-center justify-between w-1/2 mx-auto p-6">
				<OpponentAvatar :isActive="true" name="Bot 1" />
				<OpponentAvatar :isActive="false" name="Bot 2" />
				<OpponentAvatar :isActive="false" name="Bot 3" />
			</div>
		</div>

		<div class="flex flex-row gap-64 justify-center">
			<DrawPile />
			<DiscardPile />
		</div>

		<div class="flex items-center justify-center space-x-2">
			<PlayerDeck :cards="[{ type: 'Wild' }]" />
			<Score :score="450" />
		</div>
	</div>
</template>

<script setup lang="ts">
import DiscardPile from "@/components/DiscardPile.vue";
import DrawPile from "@/components/DrawPile.vue";
import OpponentAvatar from "@/components/OpponentAvatar.vue";
import PlayerDeck from "@/components/PlayerDeck.vue";
import Score from "@/components/Score.vue";
import ScoreTarget from "@/components/ScoreTarget.vue";
</script>

<style scoped>
.table-image {
	background-image: url("../assets/cards/Table_3.png");
}
</style>
