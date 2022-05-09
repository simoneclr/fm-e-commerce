import React from "react";

// Given an image, displays a thumbnail button for the gallery
const ThumbnailButton = ({url, isSelected, onClick, className}) => {
	return (
		<button onClick={onClick} data-image-selected={isSelected} 
						className={(className ? className : "") + " " + 
						"ThumbnailButton group hidden lg:block bg-white rounded-xl overflow-hidden "+
						"focus:outline focus:outline-2 focus:outline-primaryOrange"}>
			<img src={url} alt="Shoes" className="group-hover:opacity-50"/>
		</button>
	)
}

export default ThumbnailButton
