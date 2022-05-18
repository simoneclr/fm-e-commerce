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
		},
		cartItemsRemoved: {
			reducer: (state, action) => {
				const {productId} = action.payload

				cartAdapter.removeOne(state, productId)
			},
			prepare: (productId) => {
				return {
					payload: {
						productId
					}
				}
			}
		}
	}
})

export default cartSlice.reducer

// Export actions
export const {cartItemsAdded, cartItemsRemoved} = cartSlice.actions

// Export Default Selectors
export const {
	selectIds: selectAllCartIds,
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

// Selects total cost of items in the cart
// Uses state from two different slices. Unsure if its good practice or not
export const selectTotalCartPrice = createSelector(
	[selectAllCartItems, state => state.products.entities],
	(cartItems, products) => cartItems.reduce((sum, item) => {
		const id = item.productId

		const price = products[id].price * (1 - products[id].discount)

		const total = price * item.quantity

		return sum + total
	}, 0)
)
