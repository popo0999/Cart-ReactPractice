import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import React, { useState } from 'react'
import Cart from './Page/Cart'
import Adult from './Page/Adult'
import Active from './Page/Active'
import Todo from './Page/Todo'
function App() {
	return (
		<Router>
			<>
				<Link to="/ReactPractice">Home</Link>
				<Link to="/ReactPractice/cart">Cart</Link>
				<Link to="/ReactPractice/active">Active</Link>
				<Link to="/ReactPractice/adult">Adult</Link>
				<Link to="/ReactPractice/todo">Todo</Link>

				<Switch>
					<Route exact path="/ReactPractice/cart">
						<Cart />
					</Route>
					<Route exact path="/ReactPractice/adult">
						<Adult />
					</Route>
					<Route exact path="/ReactPractice/active">
						<Active />
					</Route>
					<Route exact path="/ReactPractice/todo">
						<Todo />
					</Route>
					<Route exact path="/ReactPractice">
						{/* <Home /> */}
					</Route>
				</Switch>
			</>
		</Router>
	)
}
export default App
