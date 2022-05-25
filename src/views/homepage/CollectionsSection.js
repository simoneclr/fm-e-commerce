import React from "react";

import GenderedCollections from "./GenderedCollections";
import SeasonalCollections from "./SeasonalCollections";

// Displays a list of available product collections
function CollectionsSection() {
	return (
		<React.Fragment>
			<GenderedCollections/>
			
			<SeasonalCollections/>
		</React.Fragment>
	)
}

export default CollectionsSection
