import Apple from '../../public/images/apple.svg'
import Github from '../../public/images/github.svg'

const Footer = () => {
	const fy = new Date().getFullYear()
	return (
		<footer className='crystal-clear'>
			<div className='wrapper flex justify-between items-center text-white py-10 border-t'>
				<div className='flex items-center gap-3'>{fy} all rights protected</div>
				<div className='flex gap-3'>
					<img
						src={Apple}
						alt=''
						style={{ width: '35px', mixBlendMode: 'color-burn' }}
					/>
					<img src={Github} alt='' style={{ width: '35px' }} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
