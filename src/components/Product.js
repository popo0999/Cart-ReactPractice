import React, { useState } from 'react';

const Product = (props) => {
	let [count, setCount] = useState(1);
	const product = document.querySelector('.product');

	return (
		<div className="d-flex mt-5 align-items-center product">
			<div className="col-3">
				<img src={`http://localhost:3000/${props.picName}`} className="w-100" alt="" />
			</div>
			<div className="col-3">{props.name}</div>
			<div className="col-3">
				<button
					onClick={() => {
						if (count > 1) {
							setCount(count - 1);
							props.setData(props.data - props.price);
							props.setSum(props.sum - 1);
						} else {
							setCount(1);
						}
					}}
				>
					<i className="fas fa-minus"></i>
				</button>
				<span className="mx-3 count">{count}</span>
				<button
					onClick={() => {
						console.log('plus', count);
						setCount(count + 1);
						props.setData(props.data + props.price);
						props.setSum(props.sum + 1);
					}}
				>
					<i className="fas fa-plus"></i>
				</button>
			</div>
			<div className="col-2">
				<div className="price">{props.price}</div>
			</div>
			<div className="col-1">
				<button onClick={() => {}}>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</div>
	);
};

export default Product;
