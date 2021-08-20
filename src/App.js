import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Help from './Help';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {

	return (
		<div className='App'>
			<Router>
				<nav>
					<h1>Lambda Eats</h1>
					<div className='nav-links'>
						<Link className="a" to="/">Home</Link>
						<Link className="a" id="help" to="/help">Help</Link>
						<Link className="a" to="/pizza">Checkout</Link>
					</div>
				</nav>

				<Switch>
					<Route exact path="/help">
						<Help />
					</Route>
					<Route path="/pizza">
						<Checkout />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

