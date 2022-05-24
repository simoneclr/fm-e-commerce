import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { orderAcknowledged } from "../../store/cart/cartSlice";

import CtaButton from "../../components/CtaButton";

// Displays an order confirmation page after checkout
function OrderConfirmation() {

	const status = useSelector(state => state.cart.checkoutStatus)
	const orderId = useSelector(state => state.cart.orderId)

	let renderedComponent = null

	switch (status) {
		case "idle": renderedComponent = <OrderIdle/>; break;
		case "pending": renderedComponent = <OrderPending/>; break;
		case "success": renderedComponent = <OrderFullfilled orderId={orderId}/>; break;
		case "failed": renderedComponent = <OrderFailed/>; break;
		default: break;
	}

	return (
		<div className="text-center py-8 lg:py-0">
			{renderedComponent}
		</div>
	)
}

export default OrderConfirmation

const OrderIdle = () => {
	return <Navigate to="/" replace/>
}

const OrderPending = () => {
	return (
		<React.Fragment>
			<h1 className="text-3xl lg:text-4xl">
				One Moment Please
			</h1>

			<p className="text-xl mt-8 text-darkGrayishBlue">
				We are processing your order
			</p>

			{/* https://flowbite.com/docs/components/spinner/ */}
			<svg role="status" className="w-16 h-16 mt-16 mx-auto text-darkGrayishBlue animate-spin fill-primaryOrange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
				<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
			</svg>
		</React.Fragment>
	)
}

const OrderFullfilled = ({orderId}) => {

	const dispatch = useDispatch()

	const navigate = useNavigate()

	return (
		<React.Fragment>
			<h1 className="text-3xl lg:text-4xl">
				Thank You for choosing Us!
			</h1>

			<p className="text-darkGrayishBlue text-xl mt-8">
				Your order has been confirmed.
			</p>

			<p className="text-veryDarkBlue text-lg mt-4">
				<span className="font-bold">Order ID: </span>{orderId}
			</p>

			<CtaButton className="mt-8 w-32" onClick={() => {
						dispatch(orderAcknowledged())
						navigate("/", {replace: true})
					}}>
				Got It
			</CtaButton>
		</React.Fragment>
	)
}

const OrderFailed = () => {

	const dispatch = useDispatch()

	return (
		<React.Fragment>
			<h1 className="text-3xl lg:text-4xl">
				Oh No! Something went wrong
			</h1>

			<p className="text-darkGrayishBlue text-xl mt-8">
				An error occurred while confirming your order. Please try again later.
			</p>

			<Link to="/" onClick={() => {dispatch(orderAcknowledged())}} replace={true}
						className="text-primaryOrange text-lg block mt-8 hover:underline">
				Return to Homepage
			</Link>
		</React.Fragment>
	)
}
