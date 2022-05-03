import React from 'react';

import Input from './components/input';
import Task from './components/task'
import Header from './components/header';

import { useMain } from './context/mainContentx';

function App() {
  const {tasks} = useMain()
  return (
    <div className="App">
      <Header />
      
     <Input />
     <div className="task-box">
            {tasks.map((task) => (
              <Task
               name={task.name} 
               key={task.id} 
               id={task.id}
               completed={task.completed}
               di={task.di}
               />
            ))}
        </div>
    </div>
  );
}

export default App;
