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
		<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-8">

			<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-[repeat(2,auto)] gap-x-8 gap-y-4">
				<p className="col-span-2 sm:col-span-4 lg:col-span-4 text-xl font-bold">
					Gender:
				</p>

				<Checkbox name="filter-men" checked={showMen} onChange={(e) => setShowMen(e.target.checked)}>
					Men
				</Checkbox>

				<Checkbox name="filter-women" checked={showWomen} onChange={(e) => setShowWomen(e.target.checked)}>
					Women
				</Checkbox>
			</div>
			
			<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-[repeat(4,auto)] gap-x-8 gap-y-4">
				<p className="col-span-2 sm:col-span-4 text-xl font-bold">
					Collections:
				</p>

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
		</div>
	)
}

export default ProductsFilters
