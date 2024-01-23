import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Statistics = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}

	return (
		<div className='wrapper'>
			<Carousel
				responsive={responsive}
				infinite={true}
				className='text-white text-4xl'
			>
				<div>JavaScript</div>
				<div>React</div>
				<div>HTML</div>
				<div>CSS</div>
			</Carousel>
		</div>
	)
}

export default Statistics
