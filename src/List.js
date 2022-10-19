import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list, clearItems, removeItem, editItem}) => {
  return <>
    <div className="grocery-container">
      {list.map((item, index) => {
        return <div className="grocery-item" key={index}>
                  <p className='title'>{item}</p>
                  <div>
                    <FaEdit className='edit-btn'onClick={()=> {editItem(index)}}/>
                    <FaTrash  className='delete-btn' onClick={() => removeItem(index)}/>
                  </div>
                </div>  
      })}
      <div className="clear-btn" onClick={clearItems}>Clear Items</div>
    </div>
  </>
}

export default List
