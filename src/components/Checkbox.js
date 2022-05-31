import React from "react";

// Displays a customized checkbox
function Checkbox({className, name, children, checked, onChange}) {

	const classProp = className ? className + " " : ""

	return (
		<label htmlFor={name} className={classProp + "cursor-pointer flex items-center gap-2"}>
			<input type="checkbox" name={name} id={name} checked={checked} onChange={onChange}
						className="appearance-none cursor-pointer m-0 w-5 h-5 border-2 
						border-darkGrayishBlue focus:border-veryDarkBlue rounded-sm
						grid place-content-center before:w-3 before:h-3 before:bg-primaryOrange 
						before:scale-0 checked:before:scale-100 before:transition-transform duration-500"/>
			{children}
		</label>
	)
}

export default Checkbox
