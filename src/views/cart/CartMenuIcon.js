import React from "react";
import { useSelector } from "react-redux";

import { selectCartItemsNumber } from "../../store/cart/cartSlice";

// Displays a cart icon, with a badge showing the number of items in the cart (if any),
// That can be clicked to open the cart menu
function CartMenuIcon({className}) {

	// Count all items in the cart
	const itemsCount = useSelector(selectCartItemsNumber)

	return (
		<button className={(className ? className : "") + " icon icon-cart w-6 h-5 relative"}>
			<span className="sr-only">View Cart</span>
			{ itemsCount > 0 ?

				<span className="absolute right-0 -top-1 bg-primaryOrange text-white text-[.5rem] font-bold
													px-1 rounded">
					{itemsCount}
				</span>
				
				: ""	
			}
		</button>
	)
}

export default CartMenuIcon
