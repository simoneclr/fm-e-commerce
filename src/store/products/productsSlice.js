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
	(items, filters) => items.filter(item => 
		filters.gender[item.gender] && filters.collection[item.collection]
	).map(item => item.id)
)
	