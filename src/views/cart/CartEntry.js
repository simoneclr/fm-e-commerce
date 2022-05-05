import React from "react";

import { useSelector } from "react-redux";
import { selectCartItemById } from "../../store/cart/cartSlice";

import { selectProductById } from "../../store/products/productsSlice";

// Given a prduct id, displays a cart entry for the corresponding prouct
function CartEntry({productId}) {

	// Select product details from productsSlice
	const product = useSelector(state => selectProductById(state, productId))
	
	// Select cart entry details from cartSlice
	const cartEntry = useSelector(state => selectCartItemById(state, productId))

	return (
		<span>
			{product.name}: {cartEntry.quantity}
		</span>
	)

}

export default CartEntry
