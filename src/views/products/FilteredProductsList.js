import React from "react";
import { useSelector } from "react-redux";

import { selectFilteredProductsIds } from "../../store/products/productsSlice";

import ProductLinkCard from "./ProductLinkCard";

// Displays a list of available products
function FilteredProductsList({filters}) {

	// Select product ids
	const productIds = useSelector(state => selectFilteredProductsIds(state, filters))

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
			{ productIds.map(productId => 
					<ProductLinkCard key={productId} productId={productId}/>
			)}
		</div>
	)

}

export default FilteredProductsList
