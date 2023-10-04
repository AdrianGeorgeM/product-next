import getProduct from '@/app/libs/getProduct';
import ProductCard from '@/app/components/ProductCard';

export default async function ProductPage({ params: { id } }) {
	const userData = getProduct(id);
	const product = await userData;

	return <ProductCard product={product} />;
}
