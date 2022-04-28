import React from "react";

// Displays a single item from the navigation list
const NavListItem = ({children, to}) => {
	return (
		<li>
			<a href={to ? to : "#"}>
				{children ? children : ""}
			</a>
		</li>
	)
}

// Displays the Navbar at the top of the page
function Navbar() {
	return (
		<div className="h-16 px-[5%] lg:px-0 bg-white flex items-center gap-4 lg:gap-8">
			<button className="shrink-0 lg:hidden">
				<img src="images/icon-menu.svg" alt="Hamburher menu icon"/>
			</button>

			<div className="grow lg:grow-0">
				<img className="pb-1" src="images/logo.svg" alt="Sneakers Brand Logo"/>
			</div>

			<nav className="hidden lg:block lg:grow">
				<ul className="flex items-center gap-8">
					<NavListItem>Collections</NavListItem>
					<NavListItem>Men</NavListItem>
					<NavListItem>Women</NavListItem>
					<NavListItem>About</NavListItem>
					<NavListItem>Contact</NavListItem>
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
