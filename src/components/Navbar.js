import React, { useState } from "react";

// Displays a single item from the navigation list
const NavListItem = ({children, to, onClick}) => {
	return (
		<li>
			<a href={to ? to : "#"} onClick={onClick} className="
				text-veryDarkBlue font-bold lg:text-darkGrayishBlue lg:hover:text-veryDarkBlue lg:font-normal
				lg:relative lg:h-full lg:flex lg:items-center
				lg:after:absolute lg:after:bottom-0 lg:after:w-full lg:after:h-1 lg:after:bg-primaryOrange
				lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition-transform lg:after:duration-500">
				{children ? children : ""}
			</a>
		</li>
	)
}

// Displays the Navbar at the top of the page
function Navbar() {

	// State variable controlling the open/closed navigation menu on mobile
	const [menuOpen, setMenuOpen] = useState(false)

	// Function that handles click on menu button
	const onMenuButtonClicked = () => {
		setMenuOpen(prevState => !prevState)
	}
 
	// Sets menuOpen to false to close the navigation menu
	const closeNavMenu = () => {
		setMenuOpen(false)
	}

	return (
		<div className="h-16 px-[5%] lg:px-0 bg-white flex items-center gap-4 
										lg:h-24 lg:border-b-2 lg:gap-8">
			<button className="menu-button z-50 shrink-0 lg:hidden" 
							data-menu-open={menuOpen} onClick={onMenuButtonClicked}>

				<img className="icon-hamburger h-4 w-4" src="images/icon-menu.svg" alt="Hamburher menu icon"/>
				<img className="icon-close h-4 w-4" src="images/icon-close.svg" alt="Close menu icon"/>
			</button>

			<div className="grow lg:grow-0">
				<img className="pb-1" src="images/logo.svg" alt="Sneakers Brand Logo"/>
			</div>

			<nav className="fixed inset-0 z-40 bg-black/75
											-translate-x-full transition-transform duration-700
											lg:static lg:bg-transparent lg:block lg:h-full lg:grow lg:translate-x-0 lg:transition-none"
											data-menu-open={menuOpen}>

				<ul className="bg-white h-full w-64 max-w-full pt-16 pl-[5%] flex flex-col items-start gap-8
												 lg:w-auto lg:p-0 lg:flex-row lg:items-stretch">
					<NavListItem onClick={closeNavMenu}>Collections</NavListItem>
					<NavListItem onClick={closeNavMenu}>Men</NavListItem>
					<NavListItem onClick={closeNavMenu}>Women</NavListItem>
					<NavListItem onClick={closeNavMenu}>About</NavListItem>
					<NavListItem onClick={closeNavMenu}>Contact</NavListItem>
				</ul>
			</nav>

			<button className="shrink-0">
				<img src="images/icon-cart.svg" alt="Shopping cart icon"/>
			</button>

			<div className="h-6 lg:h-12 aspect-square">
				<img src="images/image-avatar.png" alt="User's Avatar"/>
			</div>
		</div>
	)
}

export default Navbar
