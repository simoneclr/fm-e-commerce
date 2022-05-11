import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectProductById } from "../../../store/products/productsSlice";

import { ReactComponent as PrevIcon } from "../../../assets/svgs/icon-previous.svg"
import { ReactComponent as NextIcon } from "../../../assets/svgs/icon-next.svg"
import { ReactComponent as MagnifyingIcon } from "../../../assets/svgs/icon-magnifying-glass.svg"

import GalleryIconButton from "./GalleryIconButton";
import GalleryLightbox from "./GalleryLightbox";
import ThumbnailButton from "./ThumbnailButton";

// Displays a gallery of images for a given product
function ProductImageGallery({productId}) {

	// Select product information from store
	const product = useSelector(state => selectProductById(state, productId))

	// State variable controlling which image to show
	const [image, setImage] = useState(0)

	// State variable controlling the lightbox
	const [lightboxOpen, setLightboxOpen] = useState(false)

	// When the lightbox is open, set data attribute on body to prevent scrolling
	useEffect(() => {
		if (lightboxOpen) {
			document.body.dataset.lightboxOpen = true;
		} else {
			document.body.dataset.lightboxOpen = false;
		}

		// Cleanup
		return () => {
			document.body.dataset.lightboxOpen = false;
		}
	}, [lightboxOpen])

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

	// Opens/closes the lightbox
	const toggleLightbox = () => {
		setLightboxOpen(prevState => !prevState)
	}

	// Closes the lightbox
	const closeLightbox = () => {
		setLightboxOpen(false)
	}

	return (
		<React.Fragment>
			<div className="grid grid-cols-4 lg:gap-4 xl:gap-8">
				<div onClick={toggleLightbox} 
							className="relative group h-80 overflow-hidden lg:h-auto col-span-4 lg:rounded-2xl
												lg:cursor-pointer lg:hover:opacity-50">
					
					<GalleryIconButton text={"Previous image"} action={showPrevImage}
															className="absolute left-[5%] top-1/2 -translate-y-1/2 lg:hidden">
						
						<PrevIcon className="w-4 mx-auto"/>
					</GalleryIconButton>
					
					<MagnifyingIcon className="hidden w-16 h-16 fill-veryDarkBlue
													absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 lg:group-hover:block"/>

					<img src={product.images[image]} alt="Shoes"/>

					<GalleryIconButton text={"Next image"} action={showNextImage}
															className="absolute right-[5%] top-1/2 -translate-y-1/2 lg:hidden">
																
						<NextIcon className="w-4 mx-auto"/>
					</GalleryIconButton>
				</div>

				{product.images.map((img, i) => 
					<ThumbnailButton key={i} url={img} isSelected={i === image} onClick={() => setImage(i)}/>
				)}
			</div>

			<GalleryLightbox productId={productId} isOpen={lightboxOpen} close={closeLightbox}
												image={image} setImage={i => setImage(i)} 
												showPrevImage={showPrevImage} showNextImage={showNextImage}/>
		</React.Fragment>
	)
}

export default ProductImageGallery
