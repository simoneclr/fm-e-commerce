import React from "react";
import { useSelector } from "react-redux";

import { selectProductById } from "../../../store/products/productsSlice";

import GalleryIconButton from "./GalleryIconButton";
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

	// Handles click on "previous image" button
	const onPreviousImageClick = (e) => {
		e.stopPropagation()

		showPrevImage(e)
	}

	// Handles click on "next image" button
	const onNextImageClick = (e) => {
		e.stopPropagation()

		showNextImage(e)
	}

	return (
		<div onClick={close}
					className={(isOpen ? "lg:flex " : "") + 
						"hidden fixed inset-0 z-50 bg-black/75 items-center justify-center"}>
			<div className="flex flex-col gap-8 items-center">
				<div className="relative w-[65vh]">

					<button className="icon icon-close w-6 h-6
														absolute right-0 -top-10">
						<span className="sr-only">Close Lghtbox</span>
					</button>

					<GalleryIconButton text={"Previous image"} action={onPreviousImageClick}
															className="icon-previous bg-[center_left_45%]
															absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"/>

					<img src={product.images[image]} alt="Shoes" className="rounded-2xl" />

					<GalleryIconButton text={"Nest image"} action={onNextImageClick}
															className="icon-next bg-[center_right_45%]
															absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"/>

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
