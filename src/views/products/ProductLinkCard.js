import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectProductById } from "../../store/products/productsSlice";
import ProductPrice from "./ProductPrice";

// Displays a card for a product that links to its detail page
function ProductLinkCard({productId}) {

	// Select product's data
	const product = useSelector(state => selectProductById(state, productId))

	let renderedGender

	switch (product.gender) {
		case "M":
			renderedGender = "For Men";
			break;

		case "F":
			renderedGender = "For Women";
			break;
	
		default: 
			renderedGender = undefined;
			break;
	}


	return (
		product &&

		<Link to={"/products/details/" + productId}
					className="group relative overflow-hidden text-center">

			<span className="sr-only">
				Check out more details about {product.name}
			</span>
			
			<img className="rounded-2xl lg:group-hover:opacity-75" src={product.images[0]} alt="" />

			<p className="text-primaryOrange text-sm xl:text-base uppercase font-bold mt-4">
				{product.brand}
			</p>

			<p className="text-lg xl:text-xl my-2">
				{product.name}
			</p>

			<ProductPrice initialPrice={product.price} discountFactor={product.discount}
									className="my-2 items-center justify-center"/>

			{ renderedGender &&
				<p className="text-darkGrayishBlue my-2">
					{renderedGender}
				</p>
			}
		</Link>
	)
}

export default ProductLinkCard
