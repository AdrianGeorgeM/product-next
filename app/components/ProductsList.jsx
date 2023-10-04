import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductsList.module.css';

const ProductList = ({ product }) => {
	return (
		<div className={styles['product-card']}>
			<Link href={`/product/${product.id}`} className={styles['product-link']}>
				<div className={styles['product-details']}>
					<div className={styles['product-image-wrapper']}>
						<Image src={product.thumbnail} alt={product.title} width={100} height={100} />
					</div>
					<p className={styles['product-title']}>{product.title}</p>
					<p className={styles['product-description']}>{product.description}</p>
				</div>
			</Link>
		</div>
	);
};

export default ProductList;
