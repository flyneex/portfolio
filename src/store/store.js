import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter.slice'
import categorySlice from './filterCategory.slice'
import productSlice from './product.slice'

export const rootReducer = combineReducers({
	// auth: authReducer,
	counter: counterSlice,
	category: categorySlice,
	product: productSlice,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export default store
