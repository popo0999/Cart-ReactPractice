import React, { useState } from 'react'
import ListItem from '../components/todo/ListItem'
const Todo = () => {
	const [todoArray, setTodoArray] = useState([{ name: 'Learn ReactJs' }])
	const [addItem, setAddItem] = useState('')
	return (
		<>
			<div className="container">
				<div className="row my-5">
					<div className="col"></div>
					<div className="col-12 col-md-8">
						<div className="todo p-5">
							<h2>ToDo List</h2>
							<p className="todoIntro">Get things done, one item at a time.</p>
							{todoArray.map((v, i) => {
								return <ListItem key={i} name={v.name} />
							})}

							<h5 className="mt-5">Add to the todo list</h5>
							<div className="addItem d-flex">
								<input
									type="text"
									value={addItem}
									onChange={(e) => {
										setAddItem(e.target.value)
									}}
									maxLength="30"
								/>
								<div
									className="addBtn"
									onClick={() => {
										let newArr = [...todoArray]
										newArr.push({ name: addItem, check: false })
										setTodoArray(newArr)
										setAddItem('')
									}}
								>
									ADD
								</div>
							</div>
						</div>
					</div>
					<div className="col"></div>
				</div>
			</div>
		</>
	)
}

export default Todo
