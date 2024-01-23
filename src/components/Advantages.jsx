import Title from '../UI/Title'

const Advantages = () => {
	return (
		<div className='wrapper relative py-48'>
			<Title title='Advantages' />
			<div className='a-box text-white grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-4'>
				<div>
					<h3>Strong coding skills</h3>
					<p>
						This includes knowledge of programming languages such as JavaScript,
						and most popular library React, which are commonly used in web
						development.
					</p>
				</div>
				<div>
					<h3>Familiarity with web development frameworks</h3>
					<p>
						These frameworks provide pre-written code and libraries that can
						help speed up the development process, such as React, Angular, and
						Vue.js.
					</p>
				</div>
				<div>
					<h3>User Experience (UX) and User Interface (UI) design skills</h3>
					<p>
						Knowing how to create visually appealing and user-friendly
						interfaces can enhance the user experience and increase engagement.
					</p>
				</div>
				<div>
					<h3>Problem-solving skills</h3>
					<p>
						Being able to identify and troubleshoot problems with code or
						website functionality is essential in web development.
					</p>
				</div>
				<div>
					<h3>Time management skills</h3>
					<p>
						The ability to manage time effectively can ensure that projects are
						completed on time and within budget.
					</p>
				</div>
				<div>
					<h3>Knowledge of web security</h3>
					<p>
						Understanding how to implement security measures, such as SSL
						certificates and firewalls, can help protect the website and its
						users from potential threats.
					</p>
				</div>
				<div>
					<h3>Communication skills</h3>
					<p>
						Working with clients or team members requires strong communication
						skills to understand their needs and provide updates on project
						progress.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Advantages
