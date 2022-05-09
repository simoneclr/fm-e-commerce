import React from "react";

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

export default ThumbnailButton
