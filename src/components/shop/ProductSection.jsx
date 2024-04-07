import products from '../../assets/products'
import FilterCategory from './FilterCategory'
import ProductCard from './ProductCard'

const ProductSection = () => {
	return (
		<div className='wrapper'>
			<FilterCategory />
			<div className='flex justify-between items-center flex-wrap gap-5'>
				{products.map((product, idx) => (
					<div key={idx}>
						<ProductCard
							id={product.id}
							category={product.category}
							img={product.img}
							name={product.name}
							color={product.color}
							price={product.price}
							size={product.size}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductSection
