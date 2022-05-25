import React from "react";

import pictureMan from "../../assets/images/bluewater-sweden--hETibwa_UU-unsplash.jpg"
import pictureWoman from "../../assets/images/mike-von-rj8ohjW9RBA-unsplash.jpg"

import GenderLinkCard from "./GenderLinkCard";

// Displays cards for the available gendered collections
function GenderedCollections() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
			<GenderLinkCard to="/" name={"men"}>
				<img src={pictureMan} alt="A man wearing sneakers"/>
			</GenderLinkCard>

			<GenderLinkCard to="/" name={"women"}>
				<img src={pictureWoman} alt="A woman wearing sneakers"/>
			</GenderLinkCard>
		</div>
	)
}

export default GenderedCollections
