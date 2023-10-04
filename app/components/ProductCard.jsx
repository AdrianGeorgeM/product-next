import Image from 'next/image';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<Image
					src={product.thumbnail}
					alt={product.title}
					width={300}
					height={300}
					style={{ objectFit: 'cover', borderRadius: '10px' }}
				/>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{product.title}</h2>
				<p className={styles.description}>{product.description}</p>
			</div>
		</div>
	);
};

export default ProductCard;
