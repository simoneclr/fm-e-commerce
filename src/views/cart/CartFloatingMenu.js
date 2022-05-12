import React from "react";
import { useSelector } from "react-redux";
import CtaButton from "../../components/CtaButton";

import { selectCartItemsNumber } from "../../store/cart/cartSlice";

import CartItemsList from "./CartItemsList";

// Displays a floating cart menu
function CartFloatingMenu({isOpen}) {

	// Select number of items in the cart
	const itemsCount = useSelector(selectCartItemsNumber)

	return (
		<div data-cart-menu-open={isOpen} 
					className="CartFloatingMenu absolute inset-x-2 top-[4.5rem] z-20
										bg-white rounded-xl shadow-2xl
											sm:left-auto lg:right-0 lg:top-20 sm:w-96
											scale-y-0 transition-transform duration-500 origin-top">

			<h3 className="font-bold p-4 border-b-2">
				Cart
			</h3>

			{ itemsCount > 0 ?

				<div className="flex flex-col items-stretch gap-4 p-4">
					<CartItemsList/>

					<CtaButton>
						Checkout
					</CtaButton>
				</div>

				:

				<div className="flex justify-center items-center h-40 p-4">
					<span className="text-darkGrayishBlue text-sm font-bold">
						Your Cart is Empty.
					</span>
				</div>

			}

		</div>
	)
}

export default CartFloatingMenu
