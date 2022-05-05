import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter({
	selectId: item => item.productId
})

const cartSlice = createSlice({
	name: "cart",
	initialState: cartAdapter.getInitialState(),
	reducers: {
		cartItemsAdded: {
			reducer: (state, action) => {
				const {productId, quantity} = action.payload

				// Check if there are already copies of this item in the cart
				const previousOrder = state.entities[productId]

				if (previousOrder) {
					previousOrder.quantity += quantity
				} else {
					cartAdapter.addOne(state, {productId, quantity})
				}
			},
			prepare: (productId, quantity) => {
				return {
					payload: {
						productId,
						quantity
					}
				}
			}
		}
	}
})

export default cartSlice.reducer

// Export actions
export const {cartItemsAdded} = cartSlice.actions

// Export Default Selectors
export const {
	selectAll: selectAllCartItems,
	selectById: selectCartItemById
} = cartAdapter.getSelectors(state => state.cart)

// Selects total number of items in the cart
export const selectCartItemsNumber = createSelector(
	selectAllCartItems,
	items => items.reduce((previousValue, currentItem) => {
		return previousValue + currentItem.quantity
	}, 0)
)
