import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<div className='text-center'>
				<h1 className='text-5xl font-bold mb-4'>Welcome to Our Store</h1>
				<p className='text-lg mb-8'>Discover the best products crafted for your needs</p>
				<div className='flex space-x-4 justify-center'>
					<Link
						href='/products'
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					>
						Browse Products
					</Link>
				</div>
			</div>
		</div>
	);
}
