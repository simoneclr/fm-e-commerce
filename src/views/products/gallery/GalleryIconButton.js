import React from "react";

// Displays an icon button
function GallerryIconButton({className, text, action}) {
	return (
		<button onClick={action}
						className={(className ? className : "") + " " + 
						"icon bg-white w-10 aspect-square rounded-full bg-auto"}>
			<span className="sr-only">{text}</span>
		</button>
	)
}

export default GallerryIconButton
