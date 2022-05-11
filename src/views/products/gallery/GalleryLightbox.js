import React from "react";
import { useSelector } from "react-redux";

import { selectProductById } from "../../../store/products/productsSlice";

import { ReactComponent as PrevIcon } from "../../../assets/svgs/icon-previous.svg"
import { ReactComponent as NextIcon } from "../../../assets/svgs/icon-next.svg"
import { ReactComponent as CloseIcon } from "../../../assets/svgs/icon-close.svg"

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

					<button className="group w-5 h-5 absolute right-0 -top-8">
						<span className="sr-only">Close Lghtbox</span>
						<CloseIcon className="fill-white group-hover:fill-primaryOrange group-active:fill-grayishBlue"/>
					</button>

					<GalleryIconButton text={"Previous image"} action={onPreviousImageClick}
															className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
						
						<PrevIcon className="w-4 mx-auto"/>
					</GalleryIconButton>

					<img src={product.images[image]} alt="Shoes" className="rounded-2xl" />

					<GalleryIconButton text={"Nest image"} action={onNextImageClick}
															className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
						
						<NextIcon className="w-4 mx-auto"/>
					</GalleryIconButton>

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
