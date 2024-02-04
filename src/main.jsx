import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import './index.css'
import Blog from './screens/Blog.jsx'
import NotFound404 from './screens/NotFound404'
import Page from './screens/Page'
import Project from './screens/Project'

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
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</UserProvider>
	</React.StrictMode>
)
