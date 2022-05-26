import { configureStore } from "@reduxjs/toolkit"

import getFakeProductsData from "../utils/fakeProductsGenerator"

import productsSlice from "./products/productsSlice"
import cartSlice from "./cart/cartSlice"

const fakeProducts = getFakeProductsData(20)

const preloadedState = {
	products: fakeProducts,
	cart: {
		ids: [],
		entities: {},
		checkoutStatus: "idle",
		orderId: null,
		error: null
	}
}

export default configureStore({
	reducer: {
		products: productsSlice,
		cart: cartSlice
	},
	preloadedState: preloadedState
})
