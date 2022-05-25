import React from "react";

import { Link } from "react-router-dom";

import {ReactComponent as IconSummer} from "../../assets/svgs/icon-sun-solid.svg"
import {ReactComponent as IconAutumn} from "../../assets/svgs/icon-leaf-svgrepo-com.svg"
import {ReactComponent as IconWinter} from "../../assets/svgs/icon-snowflake-regular.svg"
import {ReactComponent as IconSpring} from "../../assets/svgs/icon-flower-svgrepo-com.svg"

// Displays a list of available product collections
function CollectionsSection() {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

			<CollectionLinkCard to="/" collectionName="spring">
				<IconSpring className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</CollectionLinkCard>
			
			<CollectionLinkCard to="/" collectionName="summer">
				<IconSummer className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</CollectionLinkCard>
			
			<CollectionLinkCard to="/" collectionName="autumn">
				<IconAutumn className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</CollectionLinkCard>
			
			<CollectionLinkCard to="/" collectionName="winter">
				<IconWinter className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</CollectionLinkCard>

		</div>
	)
}

export default CollectionsSection

// Displays a collection card that links to the appropriate page
const CollectionLinkCard = ({to, className, children, collectionName}) => {
	
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
