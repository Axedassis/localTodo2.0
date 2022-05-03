import React, {createContext, useContext, useState, useEffect} from 'react';

export const mainContext = createContext()


export default function MainProvider({children}){

  const [tasks, setTasks] = useState([])
  const [id, setId] = useState(0)


  useEffect(() => {
    const localTasks = localStorage.getItem('localTasks')
    const idlocal = localStorage.getItem('idCount')
    if(!localTasks){
      return;
      }else{
        setTasks(JSON.parse(localTasks))
        setId(JSON.parse(idlocal))
        const num = Number(idlocal)
        setId(num + 1)
      }
  }, []) 
  const handleRename = (id, newText, completed, di) =>{
    let contentReplace = [...tasks]
    contentReplace.splice(id, 1, {name: newText, id: id, completed: completed, di: di })
    setTasks(contentReplace)
    localStorage.setItem('localTasks', JSON.stringify(contentReplace))
  }

  const handleAddTask = (inputTask, id) => {
    const newArry = ([...tasks, {name: inputTask, id: id, completed: false, di: false}])
    setTasks([...tasks, {name: inputTask, id: id, completed: false, di: false}])
    localStorage.setItem('localTasks', JSON.stringify(newArry))
    setId(id + 1) 
    localStorage.setItem('idCount', id) 
  }

  const handleDeleteTask = (id, completed) => {
    const replace = [...tasks]
    replace.splice(id, 1, {name: '', id:id, completed: completed, di: true})
    localStorage.setItem('localTasks', JSON.stringify(replace))
    setTasks(replace)
  }

  return (
    <mainContext.Provider value={{ 
      tasks,
      id,
      setId,
      setTasks,
      handleAddTask,
      handleDeleteTask,
      handleRename}}>{children}</mainContext.Provider>
  )
}

export function useMain(){
  const context = useContext(mainContext)
  const { tasks, setTasks, handleRename, setId, id, handleAddTask, handleDeleteTask} = context
  return {tasks, setTasks, handleRename, setId, id, handleAddTask, handleDeleteTask}
}
