import { useParams } from 'react-router-dom'
import projects from '../assets/projects'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Project = () => {
	let { slug } = useParams()

	function convertToSlug(title) {
		return title
			.toLowerCase()
			.replace(/ /g, '-')
			.replace(/[^\w-]+/g, '')
	}

	const details = projects.find(
		project => convertToSlug(project.title) === slug
	)

	return (
		<>
			<Header />
			<div className='wrapper'>
				<div className='py-14 text-white text-3xl flex justify-between gap-44'>
					<img className='w-1/2' src={details.img} alt='' />
					<div className='w-1/2'>
						<div>{details.title}</div>
						<div>{details.desc}</div>
						<div>
							<a href={details.url}>Take a look</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Project
