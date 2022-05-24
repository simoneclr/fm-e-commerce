import React from "react";
import { Link } from "react-router-dom";

// Displays the homepage
function HomePage() {
	return (
		<div className="flex flex-col gap-8 items-stretch px-[5%] md:px-[10%] lg:px-0">

			{/* Hero Section */}
			<section className="pt-8 lg:pt-0 pb-16">
				<h1 className="text-center text-4xl lg:text-left lg:text-6xl">
					<span className="block leading-tight lg:leading-none text-7xl lg:text-8xl mb-16">
						Quality <span className="text-primaryOrange font-bold">Sneakers </span>
					</span>

					<span>
						From Top Brands
					</span>
				</h1>

				<Link to="products/1"
							className="block bg-primaryOrange text-white text-center font-bold 
												w-48 mx-auto lg:mx-0 mt-16 p-4 rounded-lg
												hover:opacity-75 disabled:opacity-40">
					Shop Now
				</Link>
			</section>

		</div>
	)
}

export default HomePage
