<script setup>
import { useProductsStore } from '~/components/Products/store'

const store = useProductsStore()

const onChangeSelect = event => {
	store.onChangeSelect(event.target.value)
}
</script>

<template>
	<select @change="onChangeSelect" :value="store.filters.sortBy">
		<option value="name">По названию</option>
		<option value="-price">По по цене (дорогие)</option>
		<option value="price">По по цене (дешевые)</option>
	</select>
</template>

<style scoped>
@import './style.scss';
</style>
