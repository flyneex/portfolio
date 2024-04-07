import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		amount: 0,
		totalAmount: 0,
		totalPrice: 0,
	},
	reducers: {
		addToCart: (state, action) => {
			try {
				const exist = state.cart.find(
					product =>
						product.id === action.payload.id &&
						product.size === action.payload.size &&
						product.color === action.payload.color
				)
				if (exist) {
					exist.amount++
					exist.totalPrice += productId.price
					state.totalAmount++
					state.totalPrice += productId.price
				} else {
					state.cart.push({
						id: productId.id,
						name: productId.name,
						img: productId.img,
						price: productId.price,
						totalPrice: productId.price,
						size: productId.size,
						text: productId.text,
						color: productId.color,
						amount: 1,
					})
					state.totalAmount++
					state.totalPrice += productId.price
				}
			} catch (err) {
				return err
			}
		},
		removeFromCart: (state, action) => {
			try {
				const exist = state.cart.find(
					product =>
						product.id === action.payload.id &&
						product.size === action.payload.size &&
						product.color === action.payload.color
				)
				if (exist.amount === 1) {
					state.cart = state.cart.filter(
						product =>
							product.id !== action.payload.id ||
							product.size !== action.payload.size ||
							product.color !== action.payload.color
					)
					state.totalAmount--
					state.totalPrice -= action.payload.price
				} else {
					exist.amount--
					exist.totalPrice -= action.payload.price
					state.totalAmount--
					state.totalPrice -= action.payload.price
				}
			} catch (err) {
				return err
			}
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
