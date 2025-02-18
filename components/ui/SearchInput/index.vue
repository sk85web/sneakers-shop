<script setup>
import debounce from '@/utils/useDebounce'
const emit = defineEmits(['handle-search-query'])

const handleSearchQuery = event => {
	emit('handle-search-query', event.target.value)
}

const debouncedSearch = debounce(handleSearchQuery, 300)
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
