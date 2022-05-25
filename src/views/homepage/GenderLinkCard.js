import React from "react";
import { Link } from "react-router-dom";

// Displays a card that links to the appropriate gendered collection
function GenderLinkCard({to, name, className, children}) {

	const classProps = className ? className + " " : ""

	return (
		<Link to={to} className={classProps + "group relative rounded-2xl overflow-hidden"}>
			<span className="sr-only">
				Check out our {name} collection
			</span>

			<h4 className="absolute left-4 bottom-4 lg:left-8 lg:bottom-8 z-20 text-xl text-center capitalize p-2 w-32 rounded-full 
										bg-lightGrayishBlue/90 group-hover:bg-primaryOrange group-hover:text-white 
										transition-all duration-500">
				{name}
			</h4>

			{/* Black overlay on hover */}
			<div className="hidden lg:block absolute inset-0 z-10 p-8 bg-veryDarkBlue/75
											opacity-0 group-hover:opacity-100 transition-opacity duration-500">
			</div>

			{children}
		</Link>
	)
}

export default GenderLinkCard
