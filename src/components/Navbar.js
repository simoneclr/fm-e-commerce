import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../assets/svgs/logo.svg";
import userAvatar from "../assets/images/image-avatar.png";

import CartMenuIcon from "../views/cart/CartMenuIcon";

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
	const [navMenuOpen, setNavMenuOpen] = useState(false)

	// When the side navigation is open, set data attribute on body to prevent scrolling
	useEffect(() => {
		if (navMenuOpen) {
			document.body.dataset.navMenuOpen = true;
		} else {
			document.body.dataset.navMenuOpen = false;
		}

		// Cleanup
		return () => {
			document.body.dataset.navMenuOpen = false;
		}
	}, [navMenuOpen])

	// Function that handles click on menu button
	const onMenuButtonClicked = () => {
		setNavMenuOpen(prevState => !prevState)
	}
 
	// Sets navMenuOpen to false to close the navigation menu
	const closeNavMenu = () => {
		setNavMenuOpen(false)
	}

	return (
		<header className="relative h-16 px-[5%] lg:px-0 lg:mx-[10%] bg-white flex items-center gap-4 
										lg:h-24 lg:border-b-2 lg:gap-8">
			<button className="menu-button z-50 shrink-0 lg:hidden" 
							data-nav-menu-open={navMenuOpen} onClick={onMenuButtonClicked}>

				<span className="icon icon-hamburger block h-4 w-4">
					<span className="sr-only">Open Menu</span>
				</span>

				<span className="icon icon-close block h-4 w-4">
					<span className="sr-only">Close Menu</span>
				</span>
			</button>

			<div className="grow pb-1 lg:grow-0">
				<Logo className="fill-veryDarkBlue"/>
			</div>

			{/* Displays the trans-black overlay when mobile menu is open */}
			<div data-nav-menu-open={navMenuOpen} onClick={closeNavMenu}
					className="nav-backdrop lg:hidden fixed inset-0 z-30 bg-black/75 
										scale-0 opacity-0">
			</div>

			<nav data-nav-menu-open={navMenuOpen} 
					className="fixed inset-y-0 left-0 z-40 bg-white w-64 max-w-full pl-[5%] pt-16 lg:p-0
										-translate-x-full transition-transform duration-500
										lg:static lg:bg-transparent lg:block lg:h-full lg:grow lg:translate-x-0 lg:transition-none">

				<ul className="h-full pt-8 flex flex-col items-start gap-8
											lg:w-auto lg:p-0 lg:flex-row lg:items-stretch">
					<NavListItem onClick={closeNavMenu}>Collections</NavListItem>
					<NavListItem onClick={closeNavMenu}>Men</NavListItem>
					<NavListItem onClick={closeNavMenu}>Women</NavListItem>
					<NavListItem onClick={closeNavMenu}>About</NavListItem>
					<NavListItem onClick={closeNavMenu}>Contact</NavListItem>
				</ul>
			</nav>

			<CartMenuIcon className="shrink-0"/>

			<div className="h-6 lg:h-12 aspect-square">
				<img src={userAvatar} alt="User's Avatar"/>
			</div>
		</header>
	)
}

export default Navbar
