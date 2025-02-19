<script setup>
import debounce from '@/utils/useDebounce'
import { useProductsStore } from '~/components/Products/store'

const store = useProductsStore()

const onSearchQuery = event => {
	store.onSearchQuery(event.target.value)
}

const debouncedSearch = debounce(onSearchQuery, 300)
</script>

<template>
	<div class="header__input">
		<img src="/public/search.svg" alt="search-icon" />
		<input placeholder="Поиск" @input="debouncedSearch" />
	</div>
</template>

<style scoped>
@import './style.scss';
</style>
