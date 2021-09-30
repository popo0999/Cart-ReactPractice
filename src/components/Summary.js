import React from 'react';

const Summary = (props) => {
	const { data, sum } = props;

	return (
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
	);
};

export default Summary;
