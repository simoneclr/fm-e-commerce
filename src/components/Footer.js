import React from "react";

import { ReactComponent as Logo } from "../assets/svgs/logo.svg"

// Displays the footer at the bottom of the page
function Footer() {
	return (
		<footer className="bg-veryDarkBlue text-grayishBlue text-sm py-8 px-[5%] lg:px-[10%]">
			<Logo className="fill-lightGrayishBlue"/>

			<p className="mt-6">
				<span className="uppercase font-bold text-lightGrayishBlue">
					Discailmer:
				</span> This is <span className="uppercase font-bold text-lightGrayishBlue">not</span> a 
				real e-commerce website. It's only a demo interface built as an excercise
			</p>
			
			<p className="mt-4">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"
					className="text-lightGrayishBlue hover:underline">
					Frontend Mentor
				</a>.
				Coded by <a href="https://github.com/simoneclr" target="_blank" rel="noreferrer"
					className="text-lightGrayishBlue hover:underline">
					Simone Calciolari
				</a>.
			</p>
		</footer>
	)
}

export default Footer
