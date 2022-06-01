import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter()

const productsSlice = createSlice({
	name: "products",
	initialState: productsAdapter.getInitialState()
})

export default productsSlice.reducer

export const {
	selectIds: selectAllProductIds,
	selectAll: selectAllProducts,
	selectById: selectProductById
} = productsAdapter.getSelectors(state => state.products)

// Selects featured products (using trivial logic for the time being)
export const selectFeaturedProducts = state => [
	state.products.entities[state.products.ids[0]], 
	state.products.entities[state.products.ids[1]],
	state.products.entities[state.products.ids[2]],
	state.products.entities[state.products.ids[3]]
]

// Select ids of products that fit the given filters
// Use createSelector to create memoized selector instead of repeating the filter() call in the component 
export const selectFilteredProductsIds = createSelector(
	[selectAllProducts, (state, filters) => filters],
	(items, filters) => {

		let filteredItems = items.slice()

		// Only filter by gender if at least one gender was explicitly selected
		if (filters.gender.M || filters.gender.F) {
			filteredItems = filteredItems.filter(item => filters.gender[item.gender])
		}

		// Only filter by collection if at least one colelction was explicitly selected
		if (filters.collection.spring || filters.collection.summer || filters.collection.fall || filters.collection.winter) {
			filteredItems = filteredItems.filter(item => filters.collection[item.collection])
		}

		// Return the ids
		return filteredItems.map(item => item.id)
	}
)
	