import React from 'react';

function Order({ details }) {
	if (!details) {
		return <h3>Submitting your order</h3>
	}

	return (
		<div>
			<h2>Order Summary</h2>
			<p>Size: {details.size}</p>
			<p>Instructions: {details.instructions}</p>
			<p>Quantity: {details.quantity}</p>
			<p>Name: {details.name}</p>
		</div>
	)
}

export default Order;