<script setup>
import '../Product'
import SearchInput from '@/components/ui/SearchInput'
import SelectFilter from '@/components/ui/SelectFilter'
import { useProductsStore } from './components/Products/store'

const store = useProductsStore()

const items = computed(() => store.items)

onMounted(() => {
	store.fetchData()
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
			:title="item.title"
			:image-src="item.imageUrl"
			:price="item.price"
			:is-favorite="item.isFavorite"
			:is-added="item.isAdded"
		/>
	</div>
</template>

<style scoped>
@import './style.scss';
</style>
