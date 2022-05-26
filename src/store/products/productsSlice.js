import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

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
