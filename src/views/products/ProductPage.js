import React from "react";
import { useSelector } from "react-redux";

import { selectProductById } from "../../store/products/productsSlice";

import ProductImageGallery from "./ProductImageGallery";

// Displays a product page
function ProductPage({productId}) {

	const product = useSelector(state => selectProductById(state, productId))

	return (
		<div className="flex flex-col lg:flex-row items-stretch lg:justify-between gap-12">
			<div className="lg:w-1/2 lg:px-12">
				<ProductImageGallery productId={productId}/>			
			</div>

			<div className="grid lg:w-1/2 lg:px-12">
				<h1>{product.name}</h1>
			</div>
		</div>
	)
}

export default ProductPage
