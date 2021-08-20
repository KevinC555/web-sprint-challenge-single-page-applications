import * as yup from 'yup';

const formSchema = yup.object().shape({
	size: yup
		.string(),

	sauce: yup
		.string(),

	toppings: yup
		.string(),

	instructions: yup
		.string()
		.min(2, 'name must be at least 2 characters'),

	quantity: yup
		.string(),

	name: yup
		.string()
		.trim()
		.required('Name is required')
		.min(2, 'name must be at least 2 characters'),



})

export default formSchema;