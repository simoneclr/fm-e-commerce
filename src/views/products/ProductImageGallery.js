import React, { useState } from "react";

// Given an image, displays a thumbnail button for the gallery
const ThumbnailButton = ({url, isSelected, onClick}) => {
	return (
		<button onClick={onClick} data-image-selected={isSelected} className="ThumbnailButton rounded-xl overflow-hidden hover:opacity-50 
			focus:outline focus:outline-2 focus:outline-primaryOrange">
			<img src={url} alt="Shoes"/>
		</button>
	)
}

// Displays a gallery of images for a given product
function ProductImageGallery() {

	const IMAGES = {
		1: "images/image-product-1.jpg",
		2: "images/image-product-2.jpg",
		3: "images/image-product-3.jpg",
		4: "images/image-product-4.jpg"
	}

	// State variable controlling which image to show
	const [image, setImage] = useState("1")

	return (
		<div className="grid grid-cols-4 lg:gap-4 xl:gap-8">
			<div className="col-span-4 rounded-2xl overflow-hidden">
				<img src={IMAGES[image]} alt="Shoes"/>
			</div>

			{Object.entries(IMAGES).map(([id, img]) => 
				<ThumbnailButton key={id} url={img} isSelected={id === image} onClick={() => setImage(id)}/>
			)}
		</div>
	)
}

export default ProductImageGallery
