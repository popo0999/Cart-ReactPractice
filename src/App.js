import './styles/styles.css';
import React, { useState } from 'react';
import Order from './components/Order';
import Summary from './components/Summary';
function App() {
	let [data, setData] = useState(12500);
	let [sum, setSum] = useState(3);
	return (
		<div className="container d-flex mt-5 all">
			<Order data={data} sum={sum} setData={setData} setSum={setSum} />
			<Summary data={data} sum={sum} />
		</div>
	);
}
export default App;
