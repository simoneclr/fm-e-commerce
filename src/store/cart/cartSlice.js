import { createAsyncThunk, createEntityAdapter, createSelector, createSlice, nanoid } from "@reduxjs/toolkit";

// Perform order confirmation
export const confirmOrder = createAsyncThunk("cart/confirmOrder", async checkoutInformation => {

	// Log form data
	console.log(
		"Order Confirmed: \n" +
		"First Name: " + checkoutInformation.firstName + "\n" +
		"Last Name: " + checkoutInformation.lastName + "\n" +
		"Email Address: " + checkoutInformation.email + "\n" +
		"Phone Number: " + checkoutInformation.phone + "\n" +
		"Address: " + checkoutInformation.address + "\n" +
		"City: " + checkoutInformation.city + "\n" +
		"Country: " + checkoutInformation.country + "\n" +
		"zipCode: " + checkoutInformation.zipCode + "\n" +
		"creditCardNumber: " + checkoutInformation.creditCardNumber + "\n" +
		"creditCardPin: " + checkoutInformation.creditCardPin
	)

	// Simulate delay
	await new Promise(r => setTimeout(r, 2000))

	// Simulate an error
	// throw new Error("Server unavailable")

	// Return something resembling an order id
	return nanoid()
})

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
		},
		orderAcknowledged: (state, action) => {
			state.checkoutStatus = "idle"
			state.orderId = null
			state.error = null
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(confirmOrder.pending, (state, action) => {
				state.checkoutStatus = "pending"
			})
			.addCase(confirmOrder.fulfilled, (state, action) => {
				state.checkoutStatus = "success"
				// order id returned by the server (in this case, the fake async call)
				state.orderId = action.payload

				// Clear the cart
				state.entities = {}
				state.ids = []
			})
			.addCase(confirmOrder.rejected, (state, action) => {
				state.checkoutStatus = "failed"
				state.error = action.error.message
			})
	}
})

export default cartSlice.reducer

// Export actions
export const {cartItemsAdded, cartItemsRemoved, orderAcknowledged} = cartSlice.actions

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
