import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>MyBrand</div>
			<ul className={styles['nav-list']}>
				<li className={styles['nav-item']}>
					<Link href='/'>Home</Link>
				</li>
				<li className={styles['nav-item']}>
					<Link href='/products'>Products</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
