import React from "react";

import {ReactComponent as IconSummer} from "../../assets/svgs/icon-sun-solid.svg"
import {ReactComponent as IconAutumn} from "../../assets/svgs/icon-leaf-svgrepo-com.svg"
import {ReactComponent as IconWinter} from "../../assets/svgs/icon-snowflake-regular.svg"
import {ReactComponent as IconSpring} from "../../assets/svgs/icon-flower-svgrepo-com.svg"

import SeasonLinkCard from "./SeasonLinkCard";

// Displays a list of seasonal collections
function SeasonalCollections() {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

			<SeasonLinkCard to="/" collectionName="spring">
				<IconSpring className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</SeasonLinkCard>
			
			<SeasonLinkCard to="/" collectionName="summer">
				<IconSummer className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</SeasonLinkCard>
			
			<SeasonLinkCard to="/" collectionName="autumn">
				<IconAutumn className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</SeasonLinkCard>
			
			<SeasonLinkCard to="/" collectionName="winter">
				<IconWinter className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</SeasonLinkCard>
		</div>
	)
}

export default SeasonalCollections
