import React, { useState } from 'react'
import Li from '../components/active/Li'

function Active() {
	let [data, setData] = useState('')
	let [active, setActive] = useState(0)

	const title = [
		{ id: 1, name: '首頁' },
		{ id: 2, name: '關於我們' },
		{ id: 3, name: '產品' },
	]
	return (
		<ul>
			{title.map((v, i) => {
				return (
					<Li
						key={v.id}
						id={v.id}
						name={v.name}
						setData={setData}
						active={active}
						setActive={setActive}
					/>
				)
			})}
		</ul>
	)
}
export default Active
