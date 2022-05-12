import React from "react";
import { useSelector } from "react-redux";

import { selectProductById } from "../../store/products/productsSlice";

import ProductImageGallery from "./gallery/ProductImageGallery";
import ProductPrice from "./ProductPrice";
import ProductControls from "./ProductControls";

// Displays a product page
function ProductPage({productId}) {

	// Select product data from redux store
	const product = useSelector(state => selectProductById(state, productId))

	return (
		<div className="flex flex-col lg:flex-row items-stretch lg:justify-between gap-8 lg:gap-12">
			<div className="md:px-[10%] lg:w-1/2 lg:px-12">
				<ProductImageGallery productId={productId}/>			
			</div>

			<div className="flex flex-col gap-4 sm:gap-8 px-[5%] sm:px-[10%] lg:w-1/2 lg:px-12">
				<h1 className="text-3xl font-bold lg:text-4xl">
					<span className="block text-primaryOrange text-sm font-bold uppercase mb-4">
						{product.brand}
					</span>

					{product.name}
				</h1>
				
				<p className="text-darkGrayishBlue">
					{product.description}
				</p>
				
				<ProductPrice initialPrice={product.price} discountFactor={product.discount}/>

				<ProductControls productId={productId}/>

			</div>
		</div>
	)
}

export default ProductPage
