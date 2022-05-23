import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Displays an order confirmation page after checkout
function OrderConfirmation() {

	const status = useSelector(state => state.cart.checkoutStatus)
	const orderId = useSelector(state => state.cart.orderId)
	const error = useSelector(state => state.cart.error)

	return (
		status === "idle" ?

		// If there is no pending order, navigate to the home page
		<Navigate to="/" replace/>

		:

		<div>
			{status}
			{orderId}
			{error}
		</div>
	)
}

export default OrderConfirmation
