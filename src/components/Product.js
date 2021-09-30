import React, { useState } from 'react';

const Product = (props) => {
	let [count, setCount] = useState(1);

	return (
		<div className={`d-flex py-3 align-items-center product product${props.id}`}>
			<div className="col-3">
				<img
					src={`https://raw.githubusercontent.com/popo0999/Cart-ReactPractice/main/public/images/${props.picName}`}
					className="w-100"
					alt=""
				/>
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
				<button
					onClick={() => {
						let thisProduct = document.querySelector(`.product${props.id}`);
						console.log(thisProduct);
						props.setData(props.data - props.price * count);
						props.setSum(props.sum - count);
						thisProduct.remove();
					}}
				>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</div>
	);
};

export default Product;
