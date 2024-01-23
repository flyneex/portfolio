import { useState } from 'react'
import Photo from '../../public/images/photo.jpeg'
import Title from '../UI/Title'

const About = () => {
	//my age
	const [age, setAge] = useState()

	// const age = dob => {
	// 	const born = new Date(dob)
	// 	const now = new Date(diff)
	// 	const diff = Date.now() - born.getTime

	// 	return now.getFullYear - 1991
	// }

	return (
		<div className='wrapper relative py-40'>
			<Title title='About me' />
			<div className='bg-slate-300 rounded-2xl p-14 z-10 relative grid grid-cols-1 xl:grid-cols-2 gap-14'>
				<img src={Photo} alt='' className='w-full' />
				<div className='info-me'>
					<div>
						Hi there! I'm a web developer with several years of experience in
						the industry. I specialize in creating responsive and dynamic
						websites using a variety of technologies, including HTML, CSS,
						JavaScript, and PHP. My passion for coding and design has led me to
						create visually appealing and user-friendly websites that are
						tailored to the needs of my clients. I have a degree in Computer
						Science and have completed several online courses to keep up with
						the latest trends and advancements in web development. I'm
						well-versed in various content management systems, including
						WordPress, Drupal, and Joomla, and can create custom themes and
						plugins to meet specific requirements. In addition to web
						development, I have experience in search engine optimization (SEO)
						and social media integration, which helps me to create websites that
						are not only aesthetically pleasing but also rank well in search
						engine results pages (SERPs) and engage with social media audiences.
						I'm a detail-oriented professional who takes pride in my work and
						always strives to meet the expectations of my clients. If you're
						looking for a reliable and experienced web developer who can create
						a high-quality website that meets your business needs, look no
						further. Get in touch, and let's bring your ideas to life!
					</div>
					<Button variant='dark' />
				</div>
			</div>
		</div>
	)
}

export default About
