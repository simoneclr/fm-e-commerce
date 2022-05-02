import React, { useState } from "react";

// Given an image, displays a thumbnail button for the gallery
const ThumbnailButton = ({url, isSelected, onClick}) => {
	return (
		<button onClick={onClick} data-image-selected={isSelected} 
						className="ThumbnailButton hidden lg:block rounded-xl overflow-hidden hover:opacity-50 
						focus:outline focus:outline-2 focus:outline-primaryOrange">
			<img src={url} alt="Shoes"/>
		</button>
	)
}

// Displays a gallery of images for a given product
function ProductImageGallery() {

	const IMAGES = [
		"images/image-product-1.jpg",
		"images/image-product-2.jpg",
		"images/image-product-3.jpg",
		"images/image-product-4.jpg"
	]

	// State variable controlling which image to show
	const [image, setImage] = useState(0)

	// Show the previous image in the large block
	const showPrevImage = () => {
		const prev = image - 1

		if (prev >= 0) {
			setImage(prev)
		}
	}

	// Show the next image in the large block
	const showNextImage = () => {
		const next = image + 1

		if (next < IMAGES.length) {
			setImage(next)
		}
	}

	return (
		<div className="grid grid-cols-4 lg:gap-4 xl:gap-8">
			<div className="relative col-span-4 lg:rounded-2xl lg:overflow-hidden">
				<button className="absolute left-[5%] top-1/2 -translate-y-1/2 bg-white px-3 
														aspect-square rounded-full lg:hidden"
								onClick={showPrevImage}>
					<img src="images/icon-previous.svg" alt="Previous" className="m-auto"/>
				</button>

				<img src={IMAGES[image]} alt="Shoes"/>

				<button className="absolute right-[5%] top-1/2 -translate-y-1/2 bg-white px-3 
														aspect-square rounded-full lg:hidden"
								onClick={showNextImage}>
					<img src="images/icon-next.svg" alt="Next" className="m-auto"/>
				</button>
			</div>

			{IMAGES.map((img, i) => 
				<ThumbnailButton key={i} url={img} isSelected={i === image} onClick={() => setImage(i)}/>
			)}
		</div>
	)
}

export default ProductImageGallery
