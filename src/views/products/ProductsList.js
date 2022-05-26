import React from "react";
import { useSelector } from "react-redux";

import { selectAllProductIds } from "../../store/products/productsSlice";

import ProductLinkCard from "./ProductLinkCard";

// Displays a list of available products
function ProductsList() {

	// Select product ids
	const productIds = useSelector(selectAllProductIds)

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-4">
			{ productIds.map(productId => 
					<ProductLinkCard key={productId} productId={productId}/>
			)}
		</div>
	)

}

export default ProductsList
