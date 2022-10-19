import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = JSON.parse(localStorage.getItem('list'))
  if (!list) {
    return [];
  } else {
    return list;
  }
}

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [editMode, setEditMode] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [indexArray, setIndexArray] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      setAlert(true)
      setAlertType('insertValue')
    } else {
      if (editMode) {
        list[indexArray] = value; 
        setList([...list])
  
        setEditMode(false)
        setValue('');
        setAlert(true)
        setAlertType('itemEdited')
      } else {
  
        setList([...list, value])
        
        setValue('');
        setAlert(true)
        setAlertType('itemAdded')
      }
    }
  }

  const clearItems = () =>{
    setList([]);
    setAlert(true)
    setAlertType('clearItems')
  }

  const removeItem = (num) => {
    const filteredList = list.filter((item, index)=>{
      return index !== num
    })
    setList(filteredList)
    setAlert(true)
    setAlertType('itemRemoved')
  }

  const editItem = (num) => {
    setIndexArray(num)
    setEditMode(true)
    setValue(list[num]);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout);
  }, [list, alert]);

  return (
      <section className='section-center'>
        {alert && <Alert type={alertType}/>}       
        <div className="grocery-form">
          <h3 >Grocery Bud</h3>
          
          <form onSubmit={handleSubmit} className="form-control">
            <input 
            type='text' 
            value={value} 
            placeholder='e.g.eggs'
            className="grocery"
            onChange={(e) => setValue(e.target.value)} />  
            <button type='submit' className='submit-btn btn'>{editMode ? 'Edit' : "Submit"}</button>
          </form>
        </div>
        <List list={list} clearItems={clearItems} removeItem={removeItem} editItem={editItem}/>
      </section>
  )
}

export default App
