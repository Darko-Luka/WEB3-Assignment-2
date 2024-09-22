<template>
	<div class="flex items-start">
		<div :class="getClass()">
			<Label class="text-black text-2xl">{{ name }}</Label>
		</div>
		<Score :score="250" />
	</div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import Label from "./ui/label/Label.vue";
import { defineProps } from "vue";
import Score from "./Score.vue";

const props = defineProps<{
	isActive: boolean;
	name: string;
}>();

function getClass() {
	return cn(
		`w-24 h-24 rounded-full bg-white flex justify-center items-center ${props.isActive && "border-8 border-yellow-500"}
	`
	);
}
</script>
