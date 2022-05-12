import React from "react";

// Given the initial price and a discount factor, computes and displays the actual price of the product
const ProductPrice = ({initialPrice, discountFactor}) => {

	const finalPrice = (initialPrice - initialPrice * discountFactor).toFixed(2)

	const isDiscounted = discountFactor > 0

	return (
		<div className="flex items-center gap-2 lg:flex-col lg:items-start">
			<div className="flex items-center gap-2 grow sm:grow-0">
				<span className="text-2xl font-bold">
					<span className="sr-only">Price:</span>
					${finalPrice}
				</span>

				{ isDiscounted ? 
					
					<span className="text-primaryOrange font-bold bg-paleOrange px-1 rounded-md lg:px-2">
						<span className="sr-only">Discount:</span>
						{Math.round(discountFactor * 100)}%
					</span>

					: ""
				}
			</div>

			{ isDiscounted ?
				
				<div className="text-grayishBlue font-bold line-through lg:text-sm">
					<span className="sr-only">Original Price:</span>
					${initialPrice.toFixed(2)}
				</div>
				
				: ""
			}

		</div>
	)
}

export default ProductPrice
