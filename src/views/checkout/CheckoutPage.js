import React from "react";
import { useSelector } from "react-redux";

import { selectTotalCartPrice } from "../../store/cart/cartSlice";

import CartItemsList from "../cart/CartItemsList";
import CtaButton from "../../components/CtaButton";
import CheckoutForm from "./CheckoutForm";

// Displays the checkout page
function CheckoutPage() {

	const totalPrice = useSelector(selectTotalCartPrice)

	// TODO: Manage shipping and vat as state variables
	const shippingCost = 50

	const vat = 0.25

	return (
		<div className="flex flex-col gap-8 px-[5%] sm:px-[10%] 
										lg:px-0 lg:flex-row lg:items-start lg:justify-between">
			<div className="py-4 lg:px-4 lg:grow lg:rounded-xl lg:shadow-xl">
				<CheckoutForm/>
			</div>

			<div className="flex flex-col items-stretch gap-8 py-4 lg:w-96 lg:shrink-0 lg:px-4 lg:rounded-xl lg:shadow-xl">
				<h3 className="font-bold text-2xl pb-2 border-b-2">
					Order Summary
				</h3>

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

				<CtaButton>
					Confirm Order
				</CtaButton>
			</div>
		</div>
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
