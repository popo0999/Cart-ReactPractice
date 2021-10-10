import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Over18 from '../components/adult/Over18'
function Adult() {
	const [startDate, setStartDate] = useState(new Date())
	const [adult, setAdult] = useState(false)
	const today = new Date()
	console.log(today + 1)
	return (
		<>
			<div className="container mt-5 ">
				<div className="d-flex justify-content-center">
					<div className="adult">
						<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

						<div
							className="p-3 calcBtn"
							onClick={() => {
								const age =
									today / 1000 / 60 / 60 / 24 / 365 -
									5 / 365 -
									startDate / 1000 / 60 / 60 / 24 / 365
								console.log(age)
								if (age > 18) {
									alert('你已超過18')
									setAdult(true)
								} else {
									alert('你還沒18耶...')
								}
							}}
						>
							click me
						</div>
					</div>
				</div>
			</div>
			{/* {adult ? <Over18 /> : ''} */}
		</>
	)
}

export default Adult
