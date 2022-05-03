import React from "react";
import { useSelector } from "react-redux";

import { selectProductById } from "../../store/products/productsSlice";

import ProductImageGallery from "./ProductImageGallery";
import ProductPrice from "./ProductPrice";

// Displays a product page
function ProductPage({productId}) {

	// Select product data from redux store
	const product = useSelector(state => selectProductById(state, productId))

	return (
		<div className="flex flex-col lg:flex-row items-stretch lg:justify-between gap-8 lg:gap-12">
			<div className="lg:w-1/2 lg:px-12">
				<ProductImageGallery productId={productId}/>			
			</div>

			<div className="flex flex-col gap-4 px-[5%] lg:w-1/2 lg:px-12">
				<span className="text-primaryOrange text-sm font-bold uppercase">
					{product.brand}
				</span>

				<h1 className="text-3xl font-bold lg:text-4xl">
					{product.name}
				</h1>
				
				<p className="text-darkGrayishBlue">
					{product.description}
				</p>
				
				<ProductPrice initialPrice={product.price} discountFactor={product.discount}/>

				<div>
					{/* Buttons */}
				</div>

			</div>
		</div>
	)
}

export default ProductPage
