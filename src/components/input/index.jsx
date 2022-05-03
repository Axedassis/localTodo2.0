import React, {useState} from 'react';

import { useMain } from '../../context/mainContentx';

import './style.css'

export default function Input(){
  const { id, handleAddTask} = useMain()
  const [inputTask, setInputTask] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    handleAddTask(inputTask, id) 
    setInputTask('')
  }
  return(
    <>
     <div className="wrapper">
        <div className="input-box">
          <form>
            <label>Task</label>
            <input 
            autoComplete="off"
            type="text"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            id="input"
            onSubmit={handleAdd}
            />
            <button onClick={handleAdd}>ADD</button>
          </form>
        </div>
       
      </div>
    </>
  )
}