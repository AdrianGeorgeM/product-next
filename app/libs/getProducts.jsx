export default async function getProducts() {
	const response = await fetch('https://dummyjson.com/products');

	if (!response.ok) {
		throw new Error('failed to fetch products');
	}
	let data = await response.json();
	return data;
}
