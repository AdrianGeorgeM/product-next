'use client';
import { useEffect, useState } from 'react';
import getProducts from '../libs/getProducts';
import ProductList from '../components/ProductsList';

import styles from './ProductsPage.module.css';

export default function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const result = await getProducts();
				setProducts(result.products);
				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (error) {
		return <div className={styles.error}>Error: {error.message}</div>;
	}

	if (loading) {
		return (
			<div className={styles.loading}>
				<div className={styles.spinner}></div>
				<p>Loading...</p>
				<div className={styles['bouncing-ball']}></div>
			</div>
		);
	}

	return (
		<div className='text-center mt-20'>
			<h1 className='text-5xl font-bold'>Products</h1>
			<div className={styles['products-container']}>
				{products.map((product) => (
					<ProductList key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
