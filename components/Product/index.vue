<script setup>
defineProps({
	imageSrc: String,
	title: String,
	price: Number,
	isFavorite: Boolean,
	isAdded: Boolean,
	id: Number,
})

const emit = defineEmits(['addToFavorite'])
</script>

<template>
	<div class="product__card">
		<div class="image__block">
			<button @click.prevent="emit('addToFavorite', id)">
				<img
					class="image__block-icon"
					:src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
					alt="like-icon"
				/>
			</button>
			<img class="image__block-product" :src="imageSrc" alt="title" />
		</div>
		<p class="content__block">{{ title }}</p>
		<div class="price__block">
			<p class="price__block-info">
				Цена:<br /><span>{{ price }} руб.</span>
			</p>
			<button class="price__block-btn" @click="toggleAdded">
				<img :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="plus-icon" />
			</button>
		</div>
	</div>
</template>

<style scoped>
@import './style.scss';
</style>
