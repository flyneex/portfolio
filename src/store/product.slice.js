import { createSlice } from '@reduxjs/toolkit'
import products from '../assets/products'

const productSlice = createSlice({
	name: 'product',
	initialState: {
		singleProduct: JSON.parse(sessionStorage.getItem('productItem')),
	},
	reducers: {
		singleProduct(state, action) {
			try {
				const productItem = products.filter(item => item.id === action.payload)
				state.singleProduct = productItem
				const productSave = JSON.stringify(productItem)
				sessionStorage.setItem('productItem', productSave)
			} catch (err) {
				return err
			}
		},
	},
})

export const { singleProduct } = productSlice.actions
export default productSlice.reducer
