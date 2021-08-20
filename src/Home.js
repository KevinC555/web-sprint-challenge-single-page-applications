import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
export default function Home() {
	return (
		<div className="Logo" >
			<Link id="order-pizza" className="a orderBtn" to="/pizza">ORDER NOW</Link>
		</div>
	)
}

// For the homepage / button, it works epfrectly, however the test doesn't seem to want to pass. It works when clicking it. 

