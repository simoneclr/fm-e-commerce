import { configureStore } from "@reduxjs/toolkit"

import productImage1 from "../assets/images/image-product-1.jpg"
import productImage2 from "../assets/images/image-product-2.jpg"
import productImage3 from "../assets/images/image-product-3.jpg"
import productImage4 from "../assets/images/image-product-4.jpg"

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
					productImage1,
					productImage2,
					productImage3,
					productImage4
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
