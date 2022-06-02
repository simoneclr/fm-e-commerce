import React from "react";

import pictureMan from "../../assets/images/bluewater-sweden--hETibwa_UU-unsplash.jpg"
import pictureWoman from "../../assets/images/mike-von-rj8ohjW9RBA-unsplash.jpg"

import ImageLinkCard from "./ImageLinkCard";

// Displays cards for the available gendered collections
function GenderedCollections() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
			<ImageLinkCard to="/products/?showMen=true" name={"men"} srMessage="Explore Men's collection">
				<img src={pictureMan} alt="A man wearing sneakers"/>
			</ImageLinkCard>

			<ImageLinkCard to="/products/?showWomen=true" name={"women"} srMessage="Explore Women's collection">
				<img src={pictureWoman} alt="A woman wearing sneakers"/>
			</ImageLinkCard>
		</div>
	)
}

export default GenderedCollections
