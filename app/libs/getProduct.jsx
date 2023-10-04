export default async function getProduct(id) {
	const response = await fetch(`https://dummyjson.com/products/${id}`);

	if (!response.ok) {
		throw new Error('failed to fetch product');
	}

	return response.json();
}
