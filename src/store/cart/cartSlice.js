import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter({
	selectId: item => item.productId
})

const cartSlice = createSlice({
	name: "cart",
	initialState: cartAdapter.getInitialState()
})

export default cartSlice.reducer

export const {
	selectAll: selectAllCartItems,
	selectById: selectCartItemById
} = cartAdapter.getSelectors(state => state.cart)
