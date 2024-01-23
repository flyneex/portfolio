import { useState } from 'react'
import { CiChat1, CiHeart, CiLocationArrow1 } from 'react-icons/ci'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import Title from '../UI/Title'
import projects from '../assets/projects'

const Portfolio = () => {
	const getLikes = () => {
		const likesStorage = localStorage.getItem('likes')
		if (likesStorage) {
			return JSON.parse(likesStorage)
		} else {
			return 0
		}
	}

	const getComments = () => {
		localStorage.getItem('comments')
	}

	const [count, setCount] = useState(getLikes())

	const handleCounter = () => {
		setCount(prev => prev + 1)
	}

	const comments = ['Nice project!', 'Looking good!', 'I like it!']
	const [comment, setComment] = useState(getComments(comments))

	const handleComment = () => {
		setComment(comments[Math.floor(Math.random() * comments.length)])
	}

	const handleShare = () => {
		alert('You are flew into space!')
	}

	localStorage.setItem('likes', count)
	localStorage.setItem('comments', comment)

	return (
		<div className='wrapper py-32 relative'>
			<Title title='Portfolio' />
			<div className='grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-3'>
				{projects.map(project => (
					<div
						key={project.id}
						className='portfolio-item rounded-3xl bg-white text-zinc-900 z-10'
					>
						<img
							className='rounded-3xl hover:scale-100'
							src={project.img}
							alt='Image project'
						/>
						<div className='description text-left p-5 relative'>
							<div className='flex gap-3'>
								<div className='hover:text-red-500 cursor-pointer'>
									<CiHeart size={20} onClick={handleCounter} />
								</div>
								<CiChat1
									className='hover:text-blue-500 cursor-pointer'
									size={20}
									onClick={handleComment}
								/>
								<CiLocationArrow1
									className='hover:text-green-500 cursor-pointer'
									size={20}
									onClick={handleShare}
								/>
							</div>
							<div className='block pt-3'>{count} likes</div>
							<div className=''>{comment}</div>
							<div className='text-3xl mt-5 main-color'>{project.title}</div>
							<div className='mt-3 mb-10'>{project.desc}</div>
							<Link
								to={`/project/${project.slug}`}
								className='absolute -right-1 -bottom-1 bg-[#181818] p-3 border-black rounded-tl-3xl'
							>
								<IoArrowForwardCircleOutline size={45} />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Portfolio
