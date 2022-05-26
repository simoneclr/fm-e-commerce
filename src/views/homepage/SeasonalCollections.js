import React from "react";

import {ReactComponent as IconSummer} from "../../assets/svgs/icon-sun-solid.svg"
import {ReactComponent as IconAutumn} from "../../assets/svgs/icon-leaf-svgrepo-com.svg"
import {ReactComponent as IconWinter} from "../../assets/svgs/icon-snowflake-regular.svg"
import {ReactComponent as IconSpring} from "../../assets/svgs/icon-flower-svgrepo-com.svg"

import IconLinkCard from "./IconLinkCard";

// Displays a list of seasonal collections
function SeasonalCollections() {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

			<IconLinkCard to="/" name="spring" srMessage="Check out our spring collection">
				<IconSpring className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</IconLinkCard>
			
			<IconLinkCard to="/" name="summer" srMessage="Check out our summer collection">
				<IconSummer className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</IconLinkCard>
			
			<IconLinkCard to="/" name="fall" srMessage="Check out our fall collection">
				<IconAutumn className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</IconLinkCard>
			
			<IconLinkCard to="/" name="winter" srMessage="Check out our winter collection">
				<IconWinter className="h-16 sm:h-24 xl:h-32 mx-auto fill-current stroke-current"/>
			</IconLinkCard>
		</div>
	)
}

export default SeasonalCollections
