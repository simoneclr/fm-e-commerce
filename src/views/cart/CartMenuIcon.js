import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartItemsNumber } from "../../store/cart/cartSlice";

import { ReactComponent as CartIcon } from "../../assets/svgs/icon-cart.svg"

import CartFloatingMenu from "./CartFloatingMenu";

// Displays a cart icon, with a badge showing the number of items in the cart (if any),
// That can be clicked to open the cart menu
function CartMenuIcon({className}) {

	// State variable that controls the open/close state of the cart menu
	const [cartMenuOpen, setCartMenuOpen] = useState(false)

	// Count all items in the cart
	const itemsCount = useSelector(selectCartItemsNumber)

	// Toggles the cart menu between open and closed when clicking the cart button
	const toggleCartMenu = () => {
		setCartMenuOpen(prevState => !prevState)
	}

	// Closes the cart meu
	const closeCartMenu = () => {
		setCartMenuOpen(false)
	}

	return (
		<React.Fragment>
			<button onClick={toggleCartMenu} 
							className={(className ? className : "") + " group w-6 h-5 relative"}>
				
				<span className="sr-only">View Cart</span>

				<CartIcon className="fill-darkGrayishBlue group-hover:fill-veryDarkBlue"/>

				{ itemsCount > 0 ?

					<span className="absolute right-0 -top-1 bg-primaryOrange text-white text-[.5rem] font-bold
														px-1 rounded">
						{itemsCount}
					</span>
					
					: ""	
				}
			</button>

			<CartFloatingMenu isOpen={cartMenuOpen} closeMenu={closeCartMenu}/>
		</React.Fragment>
	)
}

export default CartMenuIcon
