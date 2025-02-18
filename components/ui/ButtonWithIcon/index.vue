<script setup>
defineProps({
	text: String,
	isDisabled: Boolean,
})
</script>

<template>
	<button :disabled="isDisabled">
		{{ text }}
		<svg
			width="16"
			height="14"
			viewBox="0 0 16 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 7H14.7143"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8.71436 1L14.7144 7L8.71436 13"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</template>

<style scoped>
@import './style.scss';
</style>
