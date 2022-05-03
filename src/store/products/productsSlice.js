import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter()

const productsSlice = createSlice({
	name: "products",
	initialState: productsAdapter.getInitialState()
})

export default productsSlice.reducer

export const {
	selectAll: selectAllProducts,
	selectById: selectProductById
} = productsAdapter.getSelectors(state => state.products)
