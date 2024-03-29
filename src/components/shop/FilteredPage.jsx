import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Slider from '../../components/shop/Slider'
import Footer from '../Footer'
import FilterCategory from './FilterCategory'
import Navbar from './Navbar'
import ProductCard from './ProductCard'

const FilteredPage = () => {
	const products = useSelector(state => state.category.filteredCategory)
	console.log('products', products)
	const { category } = useParams()
	console.log('category', category)

	return (
		<div>
			<Navbar />
			<Slider />
			<FilterCategory />
			<div className='wrapper'>
				<div className='flex justify-between items-center'>
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
		</div>
	)
}

export default FilteredPage
