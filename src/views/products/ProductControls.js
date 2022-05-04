import React, { useState } from "react";

// Displays buttons to add a product to cart
function ProductControls({productId}) {

	// State variable controlling the item counter
	const [counter, setCounter] = useState(0)

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
		// TODO: Implement cart
		console.log("Added: " + counter + " to Cart.")
		setCounter(0)
	}

	return (
		<div className="flex flex-col gap-4 items-stretch lg:flex-row">
			<div className="bg-lightGrayishBlue p-3 rounded-lg flex items-center justify-between gap-3 lg:w-1/3">
				<button onClick={decrement} className="icon icon-minus w-4 h-4">
					<span className="sr-only">Remove one from Cart</span>
				</button>

				<span className="font-bold">
					{counter}
				</span>

				<button onClick={increment} className="icon icon-plus w-4 h-4">
					<span className="sr-only">Add one to Cart</span>
				</button>
			</div>

			<button onClick={addToCart} disabled={counter <= 0}
							className="bg-primaryOrange text-white font-bold p-3 rounded-lg 
												hover:opacity-75 disabled:opacity-40
												flex items-center justify-center gap-3 lg:grow">
				{/* <span className="icon icon-cart inline-block h-4 w-4"></span> */}
				<span className="inline-block">
					<svg className="fill-current" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero"/></svg>
				</span>
				<span>Add to Cart</span>
			</button>
		</div>
	)
}

export default ProductControls
