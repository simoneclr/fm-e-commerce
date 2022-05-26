import React from "react";

import ProductsList from "./ProductsList";

// Displays a page showing all available products
function ProductsDashboard() {

	return (
		<div className="px-[5%] lg:px-0 pt-4 lg:pt-0">
			<ProductsList/>
		</div>
	)
}

export default ProductsDashboard
