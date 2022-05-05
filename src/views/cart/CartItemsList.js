import React from "react";
import { useSelector } from "react-redux";

import { selectAllCartIds } from "../../store/cart/cartSlice";

import CartEntry from "./CartEntry";

// Displays a list of all items currently in the cart
function CartItemsList() {

	// Select Ids of all items in the cart
	const ids = useSelector(selectAllCartIds)

	return (
		<ul className="flex flex-col items-stretch gap-4">
			{ids.map(id => <CartEntry key={id} productId={id}/>)}
		</ul>
	)
}

export default CartItemsList
