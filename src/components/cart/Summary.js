import React, { useState } from 'react';
import Shipping from './Shipping';

const Summary = (props) => {
	const { data, sum } = props;
	const [selectedOption, setSelectedOption] = useState(0);
	const total = data + parseInt(selectedOption);

	return (
		<div className="col-3 right p-5  mx-5">
			<h2>付款摘要</h2>
			<p className="item mb-3">
				共<span> {sum} </span>項目
			</p>
			<p className="mb-3">
				運送方式:
				<Shipping selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
			</p>
			<p className="mb-3">
				運費: <br /> {selectedOption}
			</p>
			<p className="mb-3">商品總價: {data}</p>
			<p className="mb-3">
				總價:<span> {total} </span>
			</p>
			<div className="cash">前往付款</div>
		</div>
	);
};

export default Summary;
