import React from "react";
import { useSelector } from "react-redux";

import { selectCartItemsNumber } from "../../store/cart/cartSlice";

import CartItemsList from "./CartItemsList";

// Displays a floating cart menu
function CartFloatingMenu({isOpen}) {

	// Select number of items in the cart
	const itemsCount = useSelector(selectCartItemsNumber)

	return (
		<div data-cart-menu-open={isOpen} 
					className="CartFloatingMenu absolute inset-x-2 top-[4.5rem] z-20 h-64 
										bg-white rounded-xl shadow-2xl
											scale-y-0 transition-transform duration-500 origin-top">

			<h3 className="font-bold p-4 border-b-2">
				Cart
			</h3>

			{ itemsCount > 0 ?

				<React.Fragment>
					<CartItemsList/>

					<button>
						Checkout
					</button>
				</React.Fragment>

				:

				<div>
					Your Cart is Empty
				</div>

			}

		</div>
	)
}

export default CartFloatingMenu
