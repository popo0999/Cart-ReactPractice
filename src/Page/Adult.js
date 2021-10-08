import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function Adult() {
	const [startDate, setStartDate] = useState(new Date())
	const today = new Date()

	const Example = () => {}
	return (
		<>
			<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
			<button
				onClick={() => {
					console.log('Example here')
					const age = today - startDate
					console.log('today', today)
					console.log('startDate', startDate)
					console.log(age)
					console.log(age - 567907200000)
					if (age > 567993624297) {
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
