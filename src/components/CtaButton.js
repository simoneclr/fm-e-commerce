import React from "react";

// Displays a call to action button
function CtaButton({children, className, type, form, onClick, disabled}) {
	return (
		<button onClick={onClick} disabled={disabled} type={type ? type : "button"} form={form ? form : null}
						className={(className ? className : "") + " " +
						"bg-primaryOrange text-white font-bold p-3 rounded-lg	hover:opacity-75 disabled:opacity-40"}>
			{children}
		</button>
	)
}

export default CtaButton
