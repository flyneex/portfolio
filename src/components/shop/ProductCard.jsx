import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { singleProduct } from '../../store/product.slice'

const ProductCard = ({ id, img, name, color, price }) => {
	const dispatch = useDispatch()
	const { category } = useParams()
	return (
		<Link to={`/${category}/` + id}>
			<div onClick={() => dispatch(singleProduct(id))}>
				<div>
					<img className='w-[300px] h-[300px]' src={img} alt='Product Image' />
				</div>
				<div className='flex mb-5 mt-2 items-center justify-between'>
					<div className='text-white text-xl font-medium'>{name}</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='text-white text-lg font-black'>${price}</div>
					<div className='flex gap-2'>
						{color.map((clr, idx) => {
							return (
								<div
									className='w-[10px] h-[10px] rounded-full'
									key={idx}
									style={{ backgroundColor: clr }}
								></div>
							)
						})}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
