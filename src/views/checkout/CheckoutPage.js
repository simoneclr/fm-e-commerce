import React from "react";
import { useSelector } from "react-redux";

import { selectAllCartIds, selectTotalCartPrice } from "../../store/cart/cartSlice";

import CartItemsList from "../cart/CartItemsList";
import CtaButton from "../../components/CtaButton";
import CheckoutForm from "./CheckoutForm";
import { Navigate } from "react-router-dom";

// Displays the checkout page
function CheckoutPage() {

	// Select cart items ids
	const cartIds = useSelector(selectAllCartIds)

	// Select total price of items in the cart
	const totalPrice = useSelector(selectTotalCartPrice)

	// TODO: Manage shipping and vat as state variables
	const shippingCost = 50

	const vat = 0.25

	return (
		cartIds.length > 0 ?

		<div className="flex flex-col gap-8 px-[5%] sm:px-[10%] 
										lg:pt-8 lg:px-0 lg:flex-row lg:items-start lg:justify-between">
			<div className="py-4 lg:px-4 lg:grow lg:rounded-xl lg:shadow-xl">

				<h2 className="font-bold text-2xl pb-2 mb-8 border-b-2">
					Checkout
				</h2>

				<CheckoutForm/>
			</div>

			<div className="flex flex-col items-stretch gap-8 py-4 lg:w-96 lg:shrink-0 lg:px-4 lg:rounded-xl lg:shadow-xl">
				<h2 className="font-bold text-2xl pb-2 border-b-2">
					Order Summary
				</h2>

				<CartItemsList/>

				<div className="flex flex-col gap-2 pt-4 border-t-2">
					<CartCostEntry text="Subtotal" value={totalPrice}/>
					<CartCostEntry text="Shipping" value={shippingCost}/>
					<CartCostEntry text="VAT (included)" value={totalPrice * vat}/>
				</div>

				<div>
					<CartCostEntry text="Grand Total" value={totalPrice + shippingCost}
													className="font-bold uppercase"/>
				</div>

				<CtaButton type="submit" form="checkoutForm">
					Confirm Order
				</CtaButton>
			</div>
		</div>

		:

		// If the cart is empty, prevent visiting this page
		<Navigate  to="/" replace={true}/>
	)
}

export default CheckoutPage

// Displays each cart cost entry
const CartCostEntry = ({text, value, className}) => {
	return (
		<div className={(className ? className : "") + " flex justify-between"}>
			<span className="grow">
				{text}
			</span>

			<span className="text-right">
				${value.toFixed(2)}
			</span>
		</div>
	)
}
