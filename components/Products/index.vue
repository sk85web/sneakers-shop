<script setup>
import '../Product'
</script>

<template>
	<div class="header">
		<h2 class="header__title">Все кроссовки</h2>
		<input class="header__input" placeholder="Поиск" />
	</div>
	<div class="products__list">
		<Product
			title="Мужские Кроссовки Nike Blazer Mid Suede"
			image-src="/sneakers/sneakers-1.jpg"
			:price="12999"
			:is-favorite="false"
			:is-added="false"
		/>
		<Product
			title="Мужские Кроссовки Nike Blazer Mid Suede"
			image-src="/sneakers/sneakers-2.jpg"
			:price="12999"
			:is-favorite="false"
			:is-added="false"
		/>
		<Product
			title="Мужские Кроссовки Nike Blazer Mid Suede"
			image-src="/sneakers/sneakers-3.jpg"
			:price="12999"
			:is-favorite="false"
			:is-added="false"
		/>
		<Product
			title="Мужские Кроссовки Nike Blazer Mid Suede"
			image-src="/sneakers/sneakers-4.jpg"
			:price="12999"
			:is-favorite="false"
			:is-added="false"
		/>
	</div>
</template>

<style scoped>
@import './style.scss';
</style>
