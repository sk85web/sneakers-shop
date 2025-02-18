<script setup>
import { Header, Intro, Products, CartDriver } from '#components'

const items = ref([])
const filters = reactive({
	sortBy: 'title',
	searchQuery: '',
})

const fetchData = async () => {
	const params = {
		sortBy: filters.sortBy,
	}

	if (filters.searchQuery) {
		params.title = `*${filters.searchQuery}*`
	}

	try {
		const resp = await fetch(
			`https://604781a0efa572c1.mokky.dev/items?sortBy=${params.sortBy}${
				params.title ? `&title=${params.title}` : ''
			}`
		)

		const data = await resp.json()
		items.value = data.filter(item => !!item.title)
	} catch (error) {
		console.log(error)
	}
}

onMounted(fetchData)
watch(filters, fetchData)

const updateSortValue = value => (filters.sortBy = value)
const updateSearchQuery = value => (filters.searchQuery = value)
</script>

<template>
	<!-- <CartDriver /> -->
	<div class="container">
		<Header />
		<Intro />
		<Products
			:items="items"
			@update-sort="updateSortValue"
			@update-search-query="updateSearchQuery"
		/>
	</div>
</template>

<style>
@import './assets/styles/global.scss';
</style>
