<script setup>
import '../Product'
import SearchInput from '@/components/ui/SearchInput'
import SelectFilter from '@/components/ui/SelectFilter'
import { useProductsStore } from './components/Products/store'

const store = useProductsStore()

const items = computed(() => store.items)

const toggleFavorite = id => {
	store.toggleFavorite(id)
}

onMounted(async () => {
	await store.fetchData()
	await store.fetchFavorites()
})
</script>

<template>
	<div class="header">
		<h2 class="header__title">Все кроссовки</h2>
		<div class="header__actions">
			<SelectFilter />
			<SearchInput />
		</div>
	</div>
	<div class="products__list">
		<Product
			v-for="item of items"
			:key="item.id"
			:id="item.id"
			:title="item.title"
			:image-src="item.imageUrl"
			:price="item.price"
			:is-favorite="item.isFavorite"
			:is-added="item.isAdded"
			@addToFavorite="toggleFavorite"
		/>
	</div>
</template>

<style scoped>
@import './style.scss';
</style>
