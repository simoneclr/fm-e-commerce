import React, { useState } from "react";
import ProductsFilters from "./ProductsFilters";

import FilteredProductsList from "./FilteredProductsList";

// Displays a page showing all available products
function ProductsDashboard() {

	// State variables controlling product filters
	const [showMen, setShowMen] = useState(true)
	const [showWomen, setShowWomen] = useState(true)
	const [showSpring, setShowSpring] = useState(true)
	const [showSummer, setShowSummer] = useState(true)
	const [showFall, setShowFall] = useState(true)
	const [showWinter, setShowWinter] = useState(true)

	/*
		Given a product p, display it if
		filters.gender[p.gender] === true
		and
		filters.collection[p.collection] === true
	*/
	const filters = {
		gender: {
			M: showMen,
			F: showWomen
		},
		collection: {
			spring: showSpring,
			summer: showSummer,
			fall: showFall,
			winter: showWinter
		}
	}

	return (
		<div className="px-[5%] sm:px-[10%] lg:px-0 pt-4 lg:pt-0">
			<ProductsFilters 
				showMen={showMen} setShowMen={setShowMen}
				showWomen={showWomen} setShowWomen={setShowWomen}
				showSpring={showSpring} setShowSpring={setShowSpring}
				showSummer={showSummer} setShowSummer={setShowSummer}
				showFall={showFall} setShowFall={setShowFall}
				showWinter={showWinter} setShowWinter={setShowWinter}
			/>

			<FilteredProductsList filters={filters}/>
		</div>
	)
}

export default ProductsDashboard
