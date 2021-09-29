import './styles/styles.css';
import React, { useState } from 'react';
import Product from './components/Product';
function App() {
	let [data, setData] = useState(12500);
	let [sum, setSum] = useState(3);
	return (
		<div>
			<div className="container d-flex mt-5 all">
				<div className="col-9">
					<div className="title d-flex align-items-center">
						<h1>訂購單</h1>
						<p className="m-0">3種商品項目</p>
					</div>
					<Product
						name="New Balance shoes"
						price={3000}
						setData={setData}
						data={data}
						setSum={setSum}
						sum={sum}
						picName="NB.jpg"
					/>
					<Product
						name="Nike shoes"
						price={4500}
						setData={setData}
						data={data}
						setSum={setSum}
						sum={sum}
						picName="nike.jfif"
					/>
					<Product
						name="solomon shoes"
						price={5000}
						setData={setData}
						data={data}
						setSum={setSum}
						sum={sum}
						picName="solomon.jpg"
					/>
				</div>
				<div className="col-3 right px-5 mx-5">
					<h2>付款摘要</h2>
					<p className="item">
						共<span> {sum} </span>項目
					</p>
					<p>
						總價:<span> {data} </span>
					</p>
					<div className="cash">前往付款</div>
				</div>
			</div>
		</div>
	);
}
export default App;
