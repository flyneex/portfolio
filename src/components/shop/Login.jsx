import { useState } from 'react'

const Login = () => {
	const initialValues = {
		name: '',
		password: '',
		imgUrl: '',
		auth: false,
	}

	const [values, setValues] = useState(initialValues)
	const onChangeValues = e => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	return (
		<div>
			<form action=''>
				<input type='text' value={values.name} onChange={onChangeValues} />
				<input type='text' value={values.password} onChange={onChangeValues} />
				<input type='text' value={values.imgUrl} onChange={onChangeValues} />
				<button>Log in</button>
			</form>
		</div>
	)
}

export default Login
