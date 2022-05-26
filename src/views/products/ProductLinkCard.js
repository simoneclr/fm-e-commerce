import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectProductById } from "../../store/products/productsSlice";

// Displays a card for a product that links to its detail page
function ProductLinkCard({productId}) {

	// Select product's data
	const product = useSelector(state => selectProductById(state, productId))


	return (
		product &&

		<Link to={"/products/details/" + productId}
					className="group relative overflow-hidden text-center lg:p-4 lg:rounded-2xl 
										lg:hover:bg-lightGrayishBlue lg:transition-all">

			<span className="sr-only">
				Check out more details about {product.name}
			</span>
			
			<img className="rounded-2xl" src={product.images[0]} alt="" />

			<p className="text-primaryOrange text-sm xl:text-base uppercase font-bold mt-4">
				{product.brand}
			</p>

			<p className="text-lg xl:text-xl my-2">
				{product.name}
			</p>
		</Link>
	)
}

export default ProductLinkCard
