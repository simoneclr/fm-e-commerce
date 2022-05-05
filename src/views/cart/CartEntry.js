import React from "react";

import { useSelector } from "react-redux";

import { selectCartItemById } from "../../store/cart/cartSlice";
import { selectProductById } from "../../store/products/productsSlice";

// Neatly renders the price for the cart entry
const CartEntryPrice = ({className, initialPrice, discountFactor, quantity}) => {

	const discountedPrice = (initialPrice - initialPrice * discountFactor).toFixed(2)

	const finalPrice = (quantity * discountedPrice).toFixed(2)

	return (
		<span className={(className ? className : "") + " "}>
			${discountedPrice} x {quantity}: <span className="text-veryDarkBlue font-bold">${finalPrice}</span>
		</span>
	)
}

// Given a prduct id, displays a cart entry for the corresponding prouct
function CartEntry({productId}) {

	// Select product details from productsSlice
	const product = useSelector(state => selectProductById(state, productId))
	
	// Select cart entry details from cartSlice
	const cartEntry = useSelector(state => selectCartItemById(state, productId))

	return (
		<li className="grid grid-cols-[4rem_auto_min-content] items-center gap-4">
			<img className="rounded-md" src={product.images[0]} alt="Our awesome shoes"/>

			<div className="text-darkGrayishBlue self-stretch flex flex-col justify-between truncate">
				<span className="">
					{product.name}
				</span>

				<CartEntryPrice initialPrice={product.price} discountFactor={product.discount} 
												quantity={cartEntry.quantity}/>
			</div>

			<button className="icon icon-dumpster h-4 w-4">
				<span className="sr-only">Remove from cart</span>
			</button>
		</li>
	)

}

export default CartEntry
