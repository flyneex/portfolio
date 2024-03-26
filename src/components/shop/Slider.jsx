import { useDispatch, useSelector } from 'react-redux'
import slider from '../../assets/slider'
import { nextSlide, prevSlide } from '../../store/slider.slice.js'

export const Slider = () => {
	const slideIndex = useSelector(state => state.slider.value)
	console.log(slideIndex)
	const dispatch = useDispatch()
	return (
		<div className='wrapper'>
			{slider.map((slide, idx) => (
				<div className='slide' key={idx}>
					<img src={slide.img} alt='Slider1' className='w-full h-[400px]' />
					<div>{slide.text}</div>
				</div>
			))}
			<div onClick={() => dispatch(prevSlide(slideIndex - 1))}>Prev</div>
			<div onClick={() => dispatch(nextSlide(slideIndex + 1))}>Next</div>
			{/* <div onClick={() => dispatch(dots(slideIndex))}></div> */}
		</div>
	)
}
