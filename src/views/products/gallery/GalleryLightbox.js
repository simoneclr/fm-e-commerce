import React from "react";
import { useSelector } from "react-redux";

import { selectProductById } from "../../../store/products/productsSlice";

import ThumbnailButton from "./ThumbnailButton";

// Displays a lightbox gallery with a given product's images
function GalleryLightbox({productId, isOpen, close,image, setImage, showPrevImage, showNextImage}) {

	// Select product information from store
	const product = useSelector(state => selectProductById(state, productId))

	// Handles clicks on ThumbnailButtons
	// Curried function receives the image index and return a corresponding event handler function
	const onThumbnailClick = (i) => {
		return (e) => {
			e.stopPropagation()

			setImage(i)
		}
	}

	return (
		<div onClick={close}
					className={(isOpen ? "lg:flex " : "") + 
						"hidden fixed inset-0 z-50 bg-black/75 items-center justify-center"}>
			<div className="flex flex-col gap-8 items-center">
				<div className="w-[65vh] rounded-2xl overflow-hidden">
					<img src={product.images[image]} alt="Shoes"/>
				</div>

				<div className="flex gap-8 justify-center items-center">
					{product.images.map((img, i) => 
						<ThumbnailButton key={i} url={img} isSelected={i === image} onClick={onThumbnailClick(i)}
							className="w-[10vh]"/>
					)}
				</div>
			</div>
		</div>
	)
}

export default GalleryLightbox
