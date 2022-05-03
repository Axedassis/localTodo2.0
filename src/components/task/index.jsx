import React, { useState }from 'react';

import { useMain } from '../../context/mainContentx';

import PopUp from '../popUp';

import './style.css'

export default function Task({name, id, completed, di}){
  const [isOpen, setIsOpen] = useState(false)
  const [checked, setChecked] = useState(completed)
  const {handleDeleteTask} = useMain()

  const handleClosePopUp = () => {
    setIsOpen(false)
  }

  const handleChecked = () => {
    const replace = localStorage.getItem('localTasks')
    const newReplace = JSON.parse(replace)
     setChecked(!checked)
     newReplace.splice(id, 1, {name: name, id: id, completed: !checked, di: di})
    localStorage.setItem('localTasks', JSON.stringify(newReplace))
    
  }
  
  return(
    <>
     <div className='task-wrapper'>
       <div className={di ? 'task-disable' : 'task'}>
         <div className='boxing'>

          <input type="checkbox" id={id} checked={checked} onChange={() => {}}/>
          <label htmlFor={id} className="label-input" onClick={() => handleChecked()}></label>

          <p onClick={() => setIsOpen(true)}>{name}</p>

         </div>
        <button onClick={() => handleDeleteTask(id, completed)}>x</button>
      </div>
    </div>
    {isOpen ? <PopUp 
    taskName={name} 
    handleClosePopUp={handleClosePopUp}
    completed={completed}
     id={id} 
     di={di}
     />  : null }
    </>
  )
}