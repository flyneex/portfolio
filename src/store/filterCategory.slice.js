import { createSlice } from '@reduxjs/toolkit'
import { products } from '../assets/products'

const categorySlice = createSlice({
	name: 'category',
	initialState: {
		filteredCategory: JSON.parse(sessionStorage.getItem('filteredItem')),
	},
	reducers: {
		filteredCategory: (state, action) => {
			try {
				const filterCat = products.filter(
					product => product.category === action.payload
				)
				state.filteredCategory = filterCat
				console.log('filterCat', filterCat)
				const filteredItem = JSON.stringify(filterCat)
				sessionStorage.setItem('filteredItem', filteredItem)
			} catch (err) {
				return err
			}
		},
	},
})

export const { filteredCategory } = categorySlice.actions
export default categorySlice.reducer
