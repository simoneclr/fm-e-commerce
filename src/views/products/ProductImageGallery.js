import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectProductById } from "../../store/products/productsSlice";

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
function ProductImageGallery({productId}) {

	// Select product information from store
	const product = useSelector(state => selectProductById(state, productId))

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

		if (next < product.images.length) {
			setImage(next)
		}
	}

	return (
		<div className="grid grid-cols-4 lg:gap-4 xl:gap-8">
			<div className="relative h-80 overflow-hidden lg:h-auto col-span-4 lg:rounded-2xl">
				<button className="gallery-button absolute left-[5%] top-1/2 -translate-y-1/2 bg-white px-3 
														aspect-square rounded-full lg:hidden"
								onClick={showPrevImage}>
					<img src="images/icon-previous.svg" alt="Previous" className="pr-0.5 m-auto"/>
				</button>

				<img src={product.images[image]} alt="Shoes"/>

				<button className="absolute right-[5%] top-1/2 -translate-y-1/2 bg-white px-3 
														aspect-square rounded-full lg:hidden"
								onClick={showNextImage}>
					<img src="images/icon-next.svg" alt="Next" className="pl-0.5 m-auto"/>
				</button>
			</div>

			{product.images.map((img, i) => 
				<ThumbnailButton key={i} url={img} isSelected={i === image} onClick={() => setImage(i)}/>
			)}
		</div>
	)
}

export default ProductImageGallery
