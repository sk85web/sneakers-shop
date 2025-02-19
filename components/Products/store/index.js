import { defineStore } from 'pinia'

export const useProductsStore = defineStore('productsStore', () => {
	const filters = reactive({
		sortBy: 'title',
		searchQuery: '',
	})

	const items = ref([])

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

	watch(filters, fetchData, { deep: true })

	const onChangeSelect = value => (filters.sortBy = value)

	const onSearchQuery = value => (filters.searchQuery = value)

	return { items, onChangeSelect, onSearchQuery, fetchData, filters }
})
