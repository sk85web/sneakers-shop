<script setup>
import '../Product'
import SearchInput from '@/components/ui/SearchInput'
import SelectFilter from '@/components/ui/SelectFilter'

defineProps({
	items: Array,
})

const emit = defineEmits(['update-sort', 'update-search-query'])

const handleSortChange = value => emit('update-sort', value)
const handleSearchQuery = value => emit('update-search-query', value)
</script>

<template>
	<div class="header">
		<h2 class="header__title">Все кроссовки</h2>
		<div class="header__actions">
			<SelectFilter @handle-sort-change="handleSortChange" />
			<SearchInput @handle-search-query="handleSearchQuery" />
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
