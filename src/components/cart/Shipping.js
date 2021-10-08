import React, { useState } from 'react';

const Shipping = (props) => {
	return (
		<section id="selectedOption">
			<select
				value={props.selectedOption}
				onChange={(e) => {
					props.setSelectedOption(e.target.value);
					console.log(e.target.value);
				}}
			>
				{/* 第一個值會用state的初始值 */}
				<option value="0">請選擇</option>
				<option value="250">宅配</option>
				<option value="200">郵局寄送</option>
			</select>
		</section>
	);
};

export default Shipping;
