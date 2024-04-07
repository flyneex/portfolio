import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: auth,
	initialState: {
		user: {
			name: '',
			password: '',
			imgUrl: '',
			auth: false,
		},
	},
	reducers: {
		getAuth: (state, action) => {
			state.user = action.payload
		},
		getOutAuth: (state, action) => {
			state.user = {
				name: '',
				password: '',
				imgUrl: '',
				auth: false,
			}
		},
	},
})

export default authReducer
