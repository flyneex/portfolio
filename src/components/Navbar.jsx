import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='lg:block'>
			<ul className='xl:flex gap-5 text-xl'>
				<li className='mb-5 xl:m-0'>
					<Link className='text-white' to='/'>
						Home
					</Link>
				</li>
				<li className='mb-5 xl:m-0'>
					<Link className='text-white' to='/page'>
						Sample Page
					</Link>
				</li>
				<li className='mb-5 xl:m-0'>
					<Link className='text-white' to='/blog'>
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
