import Form from '../UI/Form'
import blogs from '../assets/blogs'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Blog = props => {
	return (
		<>
			<Header />
			<div className='wrapper'>
				{blogs.map(blog => (
					<div key={blog.id}>
						<div>{blog.img}</div>
						<div>{blog.title}</div>
						<div>{blog.description}</div>
					</div>
				))}
			</div>
			<Form />
			<Footer />
		</>
	)
}

export default Blog
