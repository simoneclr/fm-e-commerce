import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { cartItemsRemoved, selectCartItemById } from "../../store/cart/cartSlice";
import { selectProductById } from "../../store/products/productsSlice";

import { ReactComponent as DeleteIcon } from "../../assets/svgs/icon-delete.svg"

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

	const dispatch = useDispatch()

	// Removes entry from the cart when clicking dumpster button
	const removeCartEntry = () => {
		dispatch(cartItemsRemoved(productId))
	}

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

			<button onClick={removeCartEntry} className="group h-4 w-4">
				<span className="sr-only">Remove from cart</span>
				<DeleteIcon className="fill-grayishBlue group-hover:fill-veryDarkBlue group-active:fill-darkGrayishBlue"/>
			</button>
		</li>
	)

}

export default CartEntry
