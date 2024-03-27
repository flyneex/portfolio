import products from '../assets/products'
import Footer from '../components/Footer'
import FilterCategory from '../components/shop/FilterCategory'
import Navbar from '../components/shop/Navbar'
import ProductCard from '../components/shop/ProductCard'
import Slider from '../components/shop/Slider'

const Shop = () => {
	return (
		<>
			<Navbar />
			<Slider />
			<FilterCategory />
			<div className='wrapper'>
				<div className='flex justify-between items-center flex-wrap'>
					{products.map((product, idx) => (
						<div key={idx}>
							<ProductCard
								id={product.id}
								category={product.category}
								img={product.img}
								name={product.name}
								color={product.color}
								price={product.price}
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Shop
