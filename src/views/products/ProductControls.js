import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { cartItemsAdded } from "../../store/cart/cartSlice";

import { ReactComponent as CartIcon } from "../../assets/svgs/icon-cart.svg"
import { ReactComponent as PlusIcon } from "../../assets/svgs/icon-plus.svg"
import { ReactComponent as MinusIcon } from "../../assets/svgs/icon-minus.svg"

import CtaButton from "../../components/CtaButton";

// Displays buttons to add a product to cart
function ProductControls({productId}) {

	// State variable controlling the item counter
	const [counter, setCounter] = useState(0)

	const dispatch = useDispatch()

	// Increase counter by one
	// TODO: Implement stock quantity
	const increment = () => {
		setCounter(prevState => prevState + 1)
	}

	// Decreases counter by one
	const decrement = () => {
		if (counter > 0) {
			setCounter(prevState => prevState - 1)
		}
	}

	// Adds selected number of items to cart and resets counter
	const addToCart = () => {
		// Add items to cartSlice
		dispatch(cartItemsAdded(productId, counter))

		// Reset counter
		setCounter(0)
	}

	return (
		<div className="flex flex-col gap-4 items-stretch sm:flex-row sm:justify-between lg:flex-col xl:flex-row">
			<div className="bg-lightGrayishBlue p-3 rounded-lg flex items-center justify-between gap-3 
											sm:w-1/2 lg:w-full xl:w-1/3">
				<button onClick={decrement} className="w-4 h-4 hover:opacity-75">
					<span className="sr-only">Reduce order quantity by one</span>
					<MinusIcon className="fill-primaryOrange group-hover:opacity-50"/>
				</button>

				<span className="font-bold">
					<span className="sr-only">Order quantity: </span>
					{counter}
				</span>

				<button onClick={increment} className="w-4 h-4 hover:opacity-75">
					<span className="sr-only">Increase order quantity by one</span>
					<PlusIcon className="fill-primaryOrange"/>
				</button>
			</div>

			<CtaButton onClick={addToCart} disabled={counter <= 0}
							className="flex items-center justify-center gap-3 sm:grow">
				<CartIcon className="fill-current w-6 h-5"/>

				<span>Add to Cart</span>
			</CtaButton>
		</div>
	)
}

export default ProductControls
