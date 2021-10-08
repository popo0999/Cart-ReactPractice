import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import Todo from './Todo'

function Adult() {
	const [startDate, setStartDate] = useState(new Date())
	const today = new Date()
	return (
		<>
			<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
			<button
				onClick={() => {
					const age =
						today / 1000 / 60 / 60 / 24 / 365 -
						5 / 365 -
						startDate / 1000 / 60 / 60 / 24 / 365
					console.log('today', today)
					console.log('startDate', startDate)
					console.log(age)
					if (age > 18) {
						alert('你已超過18')
					} else {
						alert('你還沒18耶...')
					}
				}}
			>
				click me
			</button>
		</>
	)
}

export default Adult
