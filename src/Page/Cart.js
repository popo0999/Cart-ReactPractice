import React, { useState } from 'react'
import Order from '../components/cart/Order'
import Summary from '../components/cart/Summary'
function Cart() {
	let [data, setData] = useState(12500)
	let [sum, setSum] = useState(3)
	return (
		<div className="container d-flex mt-5 all">
			<Order data={data} sum={sum} setData={setData} setSum={setSum} />
			<Summary data={data} sum={sum} />
		</div>
	)
}
export default Cart
