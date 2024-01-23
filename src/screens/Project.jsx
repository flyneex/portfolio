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
				<div className='py-14 text-white text-3xl flex justify-between'>
					<img src={details.img} alt='' style={{ width: '300px' }} />
					<div>
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
