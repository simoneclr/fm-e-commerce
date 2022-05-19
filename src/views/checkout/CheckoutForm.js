import React, { useState } from "react";

import FloatingLabelInput from "../../components/FloatingLabelInput";

// Displays the checkout form
function CheckoutForm() {

	// State variables controlling form inputs

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")
	const [city, setCity] = useState("")
	const [country, setCountry] = useState("")
	const [zipCode, setZipCode] = useState("")
	const [creditCardNumber, setCreditCardNumber] = useState("")
	const [creditCardPin, setCreditCardPin] = useState("")

	// Handle input changes
	const onInputChanged = (e) => {
		switch(e.currentTarget.id) {
			case "firstName": setFirstName(e.currentTarget.value); break;
			case "lastName": setLastName(e.currentTarget.value); break;
			case "email": setEmail(e.currentTarget.value); break;
			case "phone": setPhone(e.currentTarget.value); break;
			case "address": setAddress(e.currentTarget.value); break;
			case "city": setCity(e.currentTarget.value); break;
			case "country": setCountry(e.currentTarget.value); break;
			case "zipCode": setZipCode(e.currentTarget.value); break;
			case "cardNumber": setCreditCardNumber(e.currentTarget.value); break;
			case "cardPin": setCreditCardPin(e.currentTarget.value); break;
			default: break;
		}
	}

	// Handle form submission
	const onFormSubmitted = (e) => {
		e.preventDefault()

		// TODO: Dispatch action to redux store
		console.log(
			"First Name: " + firstName + "\n" +
			"Last Name: " + lastName + "\n" +
			"Email Address: " + email + "\n" +
			"Phone Number: " + phone + "\n" +
			"Address: " + address + "\n" +
			"City: " + city + "\n" +
			"Country: " + country + "\n" +
			"zipCode: " + zipCode + "\n" +
			"creditCardNumber: " + creditCardNumber + "\n" +
			"creditCardPin: " + creditCardPin
		)

		// Reset form
		setFirstName("")
		setLastName("")
		setEmail("")
		setPhone("")
		setAddress("")
		setCity("")
		setCountry("")
		setZipCode("")
		setCreditCardNumber("")
		setCreditCardPin("")
	}

	return (
		<form id="checkoutForm" onSubmit={onFormSubmitted} className="grid grid-cols-1 xl:grid-cols-2 gap-8">
			<h3 className="uppercase font-bold text-primaryOrange xl:col-span-2">
				Billing Details
			</h3>

			<FloatingLabelInput type="text" name="firstName" required={true} value={firstName} onChange={onInputChanged}>
				First Name
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="lastName" required={true} value={lastName} onChange={onInputChanged}>
				Last Name
			</FloatingLabelInput>

			<FloatingLabelInput type="email" name="email" required={true} value={email} onChange={onInputChanged}>
				Email Address
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="phone" required={true} value={phone} onChange={onInputChanged}>
				Phone Number
			</FloatingLabelInput>

			<h3 className="uppercase font-bold text-primaryOrange xl:col-span-2">
				Shipping Info
			</h3>

			<FloatingLabelInput type="text" name="address" required={true} value={address} className="xl:col-span-2" onChange={onInputChanged}>
				Address
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="city" required={true} value={city} onChange={onInputChanged}>
				City
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="country" required={true} value={country} onChange={onInputChanged}>
				Country
			</FloatingLabelInput>

			<FloatingLabelInput type="text" name="zipCode" required={true} value={zipCode} onChange={onInputChanged}>
				ZIP Code
			</FloatingLabelInput>

			<h3 className="uppercase font-bold text-primaryOrange xl:col-span-2">
				Payment Details
			</h3>

			<FloatingLabelInput type="text" name="cardNumber" required={true} value={creditCardNumber} onChange={onInputChanged}>
				Credit Card Number
			</FloatingLabelInput>

			<FloatingLabelInput type="password" name="cardPin" required={true} value={creditCardPin} onChange={onInputChanged}>
				Credit Card PIN
			</FloatingLabelInput>
		</form>
	)
}

export default CheckoutForm
