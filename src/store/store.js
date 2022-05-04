import { configureStore } from "@reduxjs/toolkit"

import productsSlice from "./products/productsSlice"
import cartSlice from "./cart/cartSlice"

const preloadedState = {
	products: {
		ids: [1],
		entities: {
			"1": {
				id: 1,
				brand: "Sneaker Company",
				name: "Fall Limited Edition Sneakers",
				description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
				price: 250,
				discount: 0.5,
				images: [
					"images/image-product-1.jpg",
					"images/image-product-2.jpg",
					"images/image-product-3.jpg",
					"images/image-product-4.jpg"
				]
			}
		}
	}
}

export default configureStore({
	reducer: {
		products: productsSlice,
		cart: cartSlice
	},
	preloadedState: preloadedState
})
