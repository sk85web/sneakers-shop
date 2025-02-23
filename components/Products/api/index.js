// export async function fetchData(filters) {
// 	const params = {
// 		sortBy: filters.sortBy,
// 	}

// 	if (filters.searchQuery) {
// 		params.searchQuery = `*${filters.searchQuery}*`
// 	}

// 	try {
// 		const resp = await fetch(
// 			`https://604781a0efa572c1.mokky.dev/items?sortBy=${params.sortBy}${
// 				params.searchQuery ? `&title=${params.searchQuery}` : ''
// 			}`
// 		)

// 		const data = await resp.json()
// 		// items.value = data.filter(item => !!item.title)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

export async function fetchFavorites() {
	try {
		const resp = await fetch('https://604781a0efa572c1.mokky.dev/favorites')
		const data = await resp.json()
		return data
	} catch (error) {
		console.log(error)
	}
}
