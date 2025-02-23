import { defineStore } from 'pinia'

export const useProductsStore = defineStore('productsStore', () => {
	const filters = reactive({
		sortBy: 'name',
		searchQuery: '',
	})

	const items = ref([])

	async function fetchData() {
		const params = {
			sortBy: filters.sortBy,
		}

		if (filters.searchQuery) {
			params.searchQuery = `*${filters.searchQuery}*`
		}

		try {
			const resp = await fetch(
				`https://604781a0efa572c1.mokky.dev/items?sortBy=${params.sortBy}${
					params.searchQuery ? `&title=${params.searchQuery}` : ''
				}`
			)

			const data = await resp.json()
			items.value = data
				.filter(item => item.title)
				.map(obj => ({
					...obj,
					isFavorite: false,
					isAdded: false,
				}))
		} catch (error) {
			console.log(error)
		}
	}

	async function fetchFavorites() {
		try {
			const resp = await fetch('https://604781a0efa572c1.mokky.dev/favorites')
			const data = await resp.json()
			items.value = items.value.map(item => {
				const favorite = data.find(dataItem => dataItem.itemId === item.id)
				if (!favorite) return item
				return {
					...item,
					isFavorite: true,
					favoriteId: favorite.id,
				}
			})
		} catch (error) {
			console.log(error)
		}
	}

	const toggleFavorite = id => {
		const product = items.value.find(item => item.id === id)

		if (product) {
			product.isFavorite = !product.isFavorite
		}
	}

	const onChangeSelect = value => (filters.sortBy = value)

	const onSearchQuery = value => (filters.searchQuery = value)

	watch(filters, fetchData, {
		deep: true,
	})

	return {
		items,
		onChangeSelect,
		onSearchQuery,
		fetchData,
		fetchFavorites,
		filters,
		toggleFavorite,
	}
})
