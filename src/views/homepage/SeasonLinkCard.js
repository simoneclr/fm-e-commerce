import React from "react"

import { Link } from "react-router-dom"

// Displays a seasonal collection card that links to the appropriate page
function SeasonLinkCard ({to, className, children, collectionName}) {
	
	const classProp = className ? className + " " : ""

	return (
		<Link to={to} className={classProp + "bg-lightGrayishBlue rounded-2xl px-8 py-8 sm:py-16 shadow-lg " +
		 							"hover:text-white hover:bg-primaryOrange hover:shadow-2xl transition-all duration-500 ease-in"}>
			{children}

			<span className="sr-only">
				Check out our {collectionName} collection
			</span>

			<h4 className="mt-8 lg:mt-16 text-xl text-center capitalize">
				{collectionName}
			</h4>
		</Link>
	)
}

export default SeasonLinkCard
