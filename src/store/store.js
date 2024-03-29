import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter.slice'
import categorySlice from './filterCategory.slice'
import productSlice from './product.slice'
import sliderSlice from './slider.slice'

export const rootReducer = combineReducers({
	// auth: authReducer,
	counter: counterSlice,
	category: categorySlice,
	product: productSlice,
	slider: sliderSlice,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export default store
