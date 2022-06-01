import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import ProductsFilters from "./ProductsFilters";
import FilteredProductsList from "./FilteredProductsList";

// Displays a page showing all available products
function ProductsDashboard() {

	// Get query parameters from url
	const [searchParams] = useSearchParams()

	// State variables controlling product filters
	const [showMen, setShowMen] = useState(false)
	const [showWomen, setShowWomen] = useState(false)
	const [showSpring, setShowSpring] = useState(false)
	const [showSummer, setShowSummer] = useState(false)
	const [showFall, setShowFall] = useState(false)
	const [showWinter, setShowWinter] = useState(false)

	useEffect(() => {

		setShowMen(searchParams.get("showMen") === "true")
		setShowWomen(searchParams.get("showWomen") === "true")
		setShowSpring(searchParams.get("showSpring") === "true")
		setShowSummer(searchParams.get("showSummer") === "true")
		setShowFall(searchParams.get("showFall") === "true")
		setShowWinter(searchParams.get("showWinter") === "true")

	}, [searchParams])

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
