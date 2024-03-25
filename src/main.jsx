import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import FilteredPage from './components/shop/FilteredPage.jsx'
import SingleProduct from './components/shop/SingleProduct.jsx'
import { UserProvider } from './context/UserContext.jsx'
import './index.css'
import Blog from './screens/Blog.jsx'
import NotFound404 from './screens/NotFound404'
import Page from './screens/Page'
import Project from './screens/Project'
import Shop from './screens/Shop.jsx'
import store from './store/store.js'

const router = createBrowserRouter([
	{
		path: '*',
		element: <NotFound404 />,
	},
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'page',
		element: <Page />,
	},
	{
		path: 'project/:slug',
		element: <Project />,
	},
	{
		path: 'blog',
		element: <Blog />,
	},
	{
		path: 'shop',
		element: <Shop />,
	},
	{
		path: 'shop/:category',
		element: <FilteredPage />,
	},
	{
		path: ':category/:id',
		element: <SingleProduct />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<UserProvider>
				<RouterProvider router={router}>
					<App />
				</RouterProvider>
			</UserProvider>
		</Provider>
	</React.StrictMode>
)
