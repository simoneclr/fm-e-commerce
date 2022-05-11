import React from "react";

import { ReactComponent as HamburgerIcon } from "../assets/svgs/icon-menu.svg"
import { ReactComponent as CloseIcon } from "../assets/svgs/icon-close.svg"

// Displays the button to toggle the mobile side navigation
function MobileMenuButton({isNavMenuOpen, onClick}) {
	return (
		<button data-nav-menu-open={isNavMenuOpen} onClick={onClick}
						className="h-4 w-4 z-50 shrink-0 lg:hidden fill-darkGrayishBlue">

			<span className="sr-only">Toggle mobile side navigation</span>

			{ isNavMenuOpen ?
				
				<CloseIcon/>

				:

				<HamburgerIcon/>
			}

		</button>
	)
}

export default MobileMenuButton
