import React from "react"

import { Link } from "react-router-dom"

// Displays a seasonal collection card that links to the appropriate page
function IconLinkCard ({to, className, children, name, srMessage}) {
	
	const classProp = className ? className + " " : ""

	return (
		<Link to={to} className={classProp + "bg-lightGrayishBlue rounded-2xl px-8 py-8 sm:py-16 shadow-lg " +
		 							"hover:text-white hover:bg-primaryOrange hover:shadow-2xl transition-all duration-500 ease-in"}>

			{ srMessage &&
				<span className="sr-only">
					Check out our {name} collection
				</span>
			}

			{children}
			
			{ name &&
				<h4 className="mt-8 lg:mt-16 text-xl text-center capitalize">
					{name}
				</h4>
			}
		</Link>
	)
}

export default IconLinkCard
