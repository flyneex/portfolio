import { createSlice } from '@reduxjs/toolkit'
import slider from '../assets/slider'

const sliderSlice = createSlice({
	name: 'slider',
	initialState: {
		value: 0,
		length: slider.length,
	},
	reducers: {
		prevSlide: (state, action) => {
			state.value = action.payload < 0 ? state.length : action.payload
		},
		nextSlide: (state, action) => {
			state.value = action.payload > state.length ? 0 : action.payload
		},
		dots: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { prevSlide, nextSlide, dots } = sliderSlice.actions
export default sliderSlice.reducer
