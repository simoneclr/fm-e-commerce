import React from "react";

import productImage1 from "../../assets/images/image-product-1.jpg"
import productImage2 from "../../assets/images/image-product-2.jpg"
import productImage3 from "../../assets/images/image-product-3.jpg"
import productImage4 from "../../assets/images/image-product-4.jpg"

// Displays a selection of featured products
function FeaturedSection() {
	return (
		<div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-[2fr_1fr_1fr] gap-8">

			<img src={productImage1} alt=""
					className="rounded-2xl col-span-2 lg:col-auto lg:row-span-2 lg:h-full lg:object-cover"/>
			
			<img src={productImage2} alt=""
					className="rounded-2xl"/>

			<img src={productImage3} alt=""
					className="rounded-2xl"/>		
			
			<img src={productImage4} alt=""
					className="rounded-2xl"/>

			<div className="bg-lightGrayishBlue w-auto h-auto rounded-2xl"></div>

		</div>
	)
}

export default FeaturedSection
