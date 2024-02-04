import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Title from '../UI/Title'

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
		<div className='wrapper relative py-40'>
			<Title title='Hard Skills' />
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={false}
				responsive={responsive}
				ssr={true}
				infinite={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition='all .5'
				transitionDuration={500}
				removeArrowOnDeviceType={['tablet', 'mobile']}
				className='text-white text-4xl carousel'
			>
				<div>
					<img
						src='../../public/images/javascript.svg'
						alt=''
						style={{ width: '45px' }}
					/>
					<div>JavaScript</div>
				</div>
				<div>
					<img
						src='../../public/images/react.svg'
						alt=''
						style={{ width: '45px' }}
					/>
					<div>React</div>
				</div>
				<div>
					<img
						src='../../public/images/html-5.svg'
						alt=''
						style={{ width: '45px' }}
					/>
					<div>HTML</div>
				</div>
				<div>
					<img
						className='mix-blend-color-burn'
						src='../../public/images/css-3.svg'
						alt=''
						style={{ width: '45px' }}
					/>
					<div>CSS</div>
				</div>
				<div>
					<img
						src='../../public/images/typescript.svg'
						alt=''
						style={{ width: '45px' }}
					/>
					<div>TypeScript</div>
				</div>
				<div>
					<img
						src='../../public/images/node.svg'
						alt=''
						style={{ width: '45px' }}
					/>
					<div>Node</div>
				</div>
			</Carousel>
		</div>
	)
}

export default Statistics
