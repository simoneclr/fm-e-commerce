import React from "react";

import ProductImageGallery from "./ProductImageGallery";

// Displays a product page
function ProductPage() {
	return (
		<div className="flex flex-col lg:flex-row items-stretch lg:justify-between gap-12">
			<div className="lg:w-1/2 lg:px-12">
				<ProductImageGallery/>			
			</div>

			<div className="grid lg:w-1/2 lg:px-12">
			</div>
		</div>
	)
}

export default ProductPage
