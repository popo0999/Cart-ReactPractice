import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import React, { useState } from 'react'
import Cart from './Page/Cart.js'
function App() {
	return (
		<Router>
			<>
				<Link to="/">Home</Link>
				<Link to="/cart">Cart</Link>

				<Switch>
					<Route path="/about">
						<Cart />
					</Route>
					<Route exact path="/">
						{/* <Home /> */}
					</Route>
				</Switch>
			</>
		</Router>
	)
}
export default App
