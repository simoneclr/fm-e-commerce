import React from "react";

// Displays an input with a floating label
function FloatingLabelInput({type, name, value, onChange, required, children, className}) {
	return (
		<div className={(className ? className : "") + " relative"}>
			<input type={type} name={name} id={name} placeholder={name} required={required} value={value} onChange={onChange}
						className="peer p-2 w-full rounded-lg outline outline-2 outline-veryDarkBlue placeholder:scale-0
											focus:outline-primaryOrange"/>

			<label htmlFor={name} className="absolute block px-1 bg-white left-1 transition-all 
						-top-4 text-darkGrayishBlue cursor-text
						peer-focus:-top-4 peer-focus:text-veryDarkBlue
					 	peer-placeholder-shown:text-base peer-placeholder-shown:top-2">
				{children}
			</label>
		</div>
	)
}

export default FloatingLabelInput
