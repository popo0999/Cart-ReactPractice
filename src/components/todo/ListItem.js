import React, { useState } from 'react'
import { FaTrash, FaCheckCircle } from 'react-icons/fa'

const ListItem = (props) => {
  const { name } = props
  const [check, setCheck] = useState(true)
  const [del, setDel] = useState(false)
  if (del === false) {
    return (
      <div className="d-flex justify-content-between align-items-center p-4 listItem">
        {check ? (
          <p className="mb-0 ">{name}</p>
        ) : (
          <p className="mb-0 listName">{name}</p>
        )}

        <div className="d-flex">
          <div
            onClick={(e) => {
              setCheck(!check)
            }}
            className="icon"
          >
            {check ? (
              <FaCheckCircle size="1.5rem" color="rgba(255,255,255,0.5)" />
            ) : (
              <FaCheckCircle size="1.5rem" color="#A65D03" />
            )}
          </div>

          <div
            className="ml-3 icon"
            onClick={(e) => {
              setDel(!del)
            }}
          >
            {' '}
            <FaTrash size="1.5rem" />
          </div>
        </div>
      </div>
    )
  } else {
    return ''
  }
}

export default ListItem
