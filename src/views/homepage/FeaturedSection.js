import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectFeaturedProducts } from "../../store/products/productsSlice";

import ImageLinkCard from "./ImageLinkCard";

// Displays a selection of featured products
function FeaturedSection() {

	const featuredProducts = useSelector(selectFeaturedProducts)

	return (
		<div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-[2fr_1fr_1fr] gap-8">

			{ featuredProducts.map((product, index) => {

				let className = ""

				if (index === 0) {
					className = "col-span-2 lg:col-auto lg:row-span-2"
				}

				return (
					<ImageLinkCard key={product.id} to={"/products/details/" + product.id}
						srMessage={"Check out details about " + product.name}
						className={className}>

						<img src={product.images[0]} alt={product.name} 
									className={index === 0 ? "lg:h-full lg:object-cover" : ""} />
					</ImageLinkCard>
				)
			})}

			<Link to="/products" className="bg-lightGrayishBlue grid place-items-center w-auto h-auto rounded-2xl
						text-xl sm:text-2xl hover:text-primaryOrange">
				Browse All
			</Link>

		</div>
	)
}

export default FeaturedSection
