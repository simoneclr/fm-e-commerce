import React from "react";

// Displays an icon button
function GalleryIconButton({className, text, action, children}) {
	return (
		<button onClick={action}
						className={(className ? className : "") + " " + 
						"bg-white w-10 aspect-square rounded-full " + 
						"stroke-veryDarkBlue hover:stroke-primaryOrange active:stroke-veryDarkBlue"}>
			
			<span className="sr-only">{text}</span>

			{children}
		</button>
	)
}

export default GalleryIconButton
