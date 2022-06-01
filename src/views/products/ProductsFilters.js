import React from "react";

import Checkbox from "../../components/Checkbox";

// Displays products dashboard's filter controls
function ProductsFilters(props) {

	const {
		showMen, setShowMen,
		showWomen, setShowWomen,
		showSpring, setShowSpring,
		showSummer, setShowSummer,
		showFall, setShowFall,
		showWinter, setShowWinter
	} = props

	return (
		<div className="py-8">
			<Checkbox name="filter-men" checked={showMen} onChange={(e) => setShowMen(e.target.checked)}>
				Men
			</Checkbox>

			<Checkbox name="filter-women" checked={showWomen} onChange={(e) => setShowWomen(e.target.checked)}>
				Women
			</Checkbox>

			<Checkbox name="filter-spring" checked={showSpring} onChange={(e) => setShowSpring(e.target.checked)}>
				Spring
			</Checkbox>

			<Checkbox name="filter-summer" checked={showSummer} onChange={(e) => setShowSummer(e.target.checked)}>
				Summer
			</Checkbox>

			<Checkbox name="filter-fall" checked={showFall} onChange={(e) => setShowFall(e.target.checked)}>
				Fall
			</Checkbox>

			<Checkbox name="filter-winter" checked={showWinter} onChange={(e) => setShowWinter(e.target.checked)}>
				Winter
			</Checkbox>
		</div>
	)
}

export default ProductsFilters
