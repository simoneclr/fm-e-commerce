import productImage1 from "../assets/images/image-product-1.jpg"
import productImage2 from "../assets/images/image-product-2.jpg"
import productImage3 from "../assets/images/image-product-3.jpg"
import productImage4 from "../assets/images/image-product-4.jpg"

// const fakeProducts = {
// 	ids: [1],
// 	entities: {
// 		"1": {
// 			id: 1,
// 			brand: "Sneaker Company",
// 			name: "Fall Limited Edition Sneakers",
// 			description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
// 			price: 250,
// 			discount: 0.5,
// 			images: [
// 				productImage1,
// 				productImage2,
// 				productImage3,
// 				productImage4
// 			]
// 		}
// 	}
// }

// Given a fake product's id, decides which gender to assign to it
const getProductGender = (id) => {
	if (id % 2 === 0) {
		return "M"
	} else {
		return "F"
	}
}

// Given a fake product's id, decides which collection to put it in
const getProductCollection = (id) => {
	switch (id % 4) {
		case 0: return "winter";
		case 1: return "spring";
		case 2: return "summer";
		case 3: return "fall";
		default: return "fall";
	}
}

// Given a fake product's id, generates a name for it
const getProductName = (id) => {
	switch (id % 4) {
		case 0: return "Winter Limited Edition Sneakers";
		case 1: return "Spring Limited Edition Sneakers";
		case 2: return "Summer Limited Edition Sneakers";
		case 3: return "Fall Limited Edition Sneakers";
		default: return "Fall Limited Edition Sneakers";
	}
}

// Given a fake product's id, builds and return an array of images for that product
const getProductImagesArray = (id) => {
	switch (id % 4) {
		case 0: return [productImage4, productImage1, productImage2, productImage3];
		case 1: return [productImage1, productImage2, productImage3, productImage4];
		case 2: return [productImage2, productImage1, productImage3, productImage4];
		case 3: return [productImage3, productImage1, productImage2, productImage4];
		default: return [productImage3, productImage1, productImage2, productImage4];
	}
}


// Generates n fake product entries
const getFakeProductsData = (n) => {
	const fakeProducts = {
		ids: [],
		entities: {}
	}

	for (let i = 1; i <= n; i++) {
		fakeProducts.ids.push(i)

		fakeProducts.entities[i] = {
			id: i,
			brand: "Sneaker Company",
			name: getProductName(i),
			description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
			gender: getProductGender(i),
			collection: getProductCollection(i),
			price: 250,
			discount: 0.5,
			images: getProductImagesArray(i)
		}
	}

	return fakeProducts
}

export default getFakeProductsData
