import React, { useState, useEffect } from 'react';
import Form from './Form';
import schema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';
import Order from './Order';

const initialFormValues = {
	size: '',
	toppings: '',
	instructions: '',
	quantity: '',
	name: '',
}

const initialFormErrors = {
	size: '',
	toppings: '',
	instructions: '',
	quantity: '',
	name: '',
}

const initalOrders = [];
const initialDisabled = true;

export default function Checkout() {
	const [orders, setOrders] = useState(initalOrders);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);



	const postNewOrder = newOrder => {
		axios.post('https://reqres.in/api/orders', newOrder)
			.then(res => {
				console.log(res);
				setOrders(res.data.data);
			}).catch(err => console.error(err));
		setFormValues(initialFormValues);
	}

	const validate = (name, value) => {
		yup.reach(schema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
	}

	const inputChange = (name, value) => {
		validate(name, value)
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	const formSubmit = () => {
		const newOrder = {
			size: formValues.size,
			toppings: formValues.toppings,
			instructions: formValues.instructions.trim(),
			quantity: formValues.quantity.trim(),
		}
		postNewOrder(newOrder);
	}




	useEffect(() => {
		schema.isValid(formValues).then(valid => setDisabled(!valid))
	}, [formValues])
	return (

		<div>
			<Form
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>

			{
				orders.map((order, index) => {
					return (
						<Order key={index} details={order} />
					)
				})
			}
		</div>

	)
}