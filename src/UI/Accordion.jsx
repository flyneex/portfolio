import { useState } from 'react'
import answers from '../assets/answers.js'
import Title from './Title.jsx'

const Accordion = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [id, setId] = useState(1)
	return (
		<>
			<Title title='FAQ' />
			{answers.map(answer => (
				<div className='acc-item mb-10' id={answer.id} key={answer.id}>
					<div onClick={() => setId(answer.id)}>
						<div
							className='title flex justify-between items-center cursor-pointer border border-indigo-300 rounded-lg py-2 px-10'
							onClick={() => setIsOpen(!isOpen)}
						>
							<h5 className='color-white'>{answer.title}</h5>
							<span style={{ fontSize: '45px', display: 'inline-block' }}>
								{isOpen && id === answer.id ? '-' : '+'}
							</span>
						</div>
					</div>
					<div
						className={`content grid overflow-hidden transition-all duration-400 ease-in-out text-white ${
							isOpen === true && id === answer.id
								? 'grid-rows-[1fr] opacity-100'
								: 'grid-rows-[0fr] opacity-0'
						}`}
					>
						<div className='overflow-hidden text-2xl'>
							<p className='pt-3'>{answer.content}</p>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Accordion
