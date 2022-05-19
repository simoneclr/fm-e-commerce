import React from "react";

import FloatingLabelInput from "../../components/FloatingLabelInput";

// Displays the checkout form
function CheckoutForm() {
	return (
		<form id="checkout-form" className="grid grid-cols-1 xl:grid-cols-2 gap-8">
			<h3 className="uppercase font-bold text-primaryOrange xl:col-span-2">
				Billing Details
			</h3>

			<FloatingLabelInput type="text" name="firstName">
				First Name
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="name">
				Last Name
			</FloatingLabelInput>

			<FloatingLabelInput type="email" name="email">
				Email Address
			</FloatingLabelInput>

			<FloatingLabelInput type="tel" name="phone">
				Phone Number
			</FloatingLabelInput>

			<h3 className="uppercase font-bold text-primaryOrange xl:col-span-2">
				Shipping Info
			</h3>

			<FloatingLabelInput type="text" name="address" className="xl:col-span-2">
				Address
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="city">
				City
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="country">
				Country
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="zip-code">
				ZIP Code
			</FloatingLabelInput>

			<h3 className="uppercase font-bold text-primaryOrange xl:col-span-2">
				Payment Details
			</h3>

			<FloatingLabelInput type="text" name="card-number">
				Credit Card Number
			</FloatingLabelInput>

			<FloatingLabelInput type="password" name="card-pin">
				Credit Card PIN
			</FloatingLabelInput>
		</form>
	)
}

export default CheckoutForm
