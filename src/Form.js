import React from 'react';
import logo from './logo.png';
export default function Form(props) {
	const {
		values,
		submit,
		change,
		disabled,
		errors,
	} = props

	const onSubmit = evt => {
		evt.preventDefault()
		submit()
	}

	const onChange = evt => {
		const { name, value, checked, type } = evt.target;
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse)
	}

	return (
		<form id="pizza-form" onSubmit={onSubmit}>
			<div>
				<h2>Build Your Own Pizza</h2>
				<img className="logo" src={logo} alt="Logo" />

				<div>
					<p>Build Your Own Pizza</p>
				</div>
				<div>
					<h3>Choice of Size</h3>
					<div>{errors.size}</div>
				</div>
				<div>
					<select
						id="size-dropdown"
						onChange={onChange}
						value={values.size}
						name='size'
					>
						<option value=''>- Select an option -</option>
						<option value='size'>Small</option>
						<option value='size'>Medium</option>
						<option value='size'>Large</option>
						<option value='size'>Extra Large</option>
					</select>
				</div>
				<div>
					<h3>Choice of Sauce</h3>
				</div>
				<div>
					<input
						type="radio"
						value={values.sauce}
						onChange={onChange}
						name="sauce"
					/>Original Red
					<input
						type="radio"
						value={values.sauce}
						onChange={onChange}
						name="sauce"
					/>Garlic Ranch
					<input
						type="radio"
						value={values.sauce}
						onChange={onChange}
						name="sauce"
					/>BBQ Sauce
					<input
						type="radio"
						value={values.sauce}
						onChange={onChange}
						name="sauce"
					/>Spinach Alfredo
				</div>
				<div>
					<h3>Add Toppings</h3>
					<div>{errors.toppings}</div>
				</div>
				<div>
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Pepporni
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Sausage
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Canadian Bacon
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Spicy Italian Sausage
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Grilled Chicken
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Onions
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Onions
				</div>
				<div>
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Diced Tomatoes
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Black Olives
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Roasted Garlic
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Artichoke Hearts
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Three Cheese
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Pineapple
					<input
						type="checkbox"
						value={values.toppings}
						onChange={onChange}
						name="toppings"
					/>Extra Cheese
				</div>
				<div>
					<h3>Enter Name</h3>
					<div>{errors.name}</div>
				</div>
				<div>
					<input
						id="name-input"
						type="text"
						value={values.name}
						onChange={onChange}
						name="name"
						placeholder="Enter your name"
					/>
				</div>
				<div>
					<h3>Special Instructions</h3>
					<div>{errors.instructions}</div>
				</div>
				<div>
					<input
						id="special-text"
						type="text"
						value={values.isntructions}
						onChange={onChange}
						name="instructions"
						placeholder="Anything else?"
					/>
				</div>
				<div>{errors.quantity}</div>
				<div>
					<input
						type="number"
						value={values.quantity}
						onChange={onChange}
						name="quantity"
					/>
					<button id="submitBtn" disabled={disabled}>Place Order</button>
				</div>
			</div>
		</form>
	)
}
