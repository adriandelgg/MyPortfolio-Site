import { type FormEvent } from 'react';
import { useFormChange } from '@/hooks/useFormChange';

export const ContactMe = () => {
	const [values, handleChange, resetForm] = useFormChange({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: ''
	});

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="firstName">First Name:</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					value={values.firstName}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="lastName">Last Name:</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					value={values.firstName}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={values.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="phone">Phone:</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={values.phone}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					value={values.message}
					onChange={handleChange}
					required
				></textarea>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
