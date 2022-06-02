import React from "react";
import { Link } from "react-router-dom";

import FeaturedSection from "./FeaturedSection";
import CollectionsSection from "./CollectionsSection";

// Displays the homepage
function HomePage() {
	return (
		<div className="flex flex-col gap-16 items-stretch px-[5%] md:px-[10%] lg:px-0">

			{/* Hero Section */}
			<section className="py-16">
				<h1 className="text-center text-4xl lg:text-left lg:text-6xl">
					<span className="block leading-tight lg:leading-none text-7xl lg:text-8xl mb-16 lg:mb-24">
						Quality <span className="text-primaryOrange font-bold">Sneakers </span>
					</span>

					<span>
						From Top Brands
					</span>
				</h1>

				<Link to="products/"
							className="block bg-primaryOrange text-white text-xl text-center font-bold 
												w-48 mx-auto lg:mx-0 mt-16 lg:mt-24 p-4 rounded-lg
												hover:opacity-75 disabled:opacity-40">
					Shop Now
				</Link>
			</section>

			<HomePageSection title="featured">
				<FeaturedSection/>
			</HomePageSection>

			<HomePageSection title={"collections"}>
				<CollectionsSection/>
			</HomePageSection>

		</div>
	)
}

export default HomePage

// Displays a section in the homepage with the given title and content
const HomePageSection = ({title, children}) => {
	return (
		<section className="flex flex-col gap-8 lg:gap-16">
			<h2 className="relative text-4xl capitalize py-8">
				<span className="absolute block left-0 top-5 bg-primaryOrange w-16 h-2 rounded-full" aria-hidden="true"></span>
				{title}
			</h2>

			{children}
		</section>
	)
}
