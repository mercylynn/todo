import React, { useState } from 'react'
import AddTask from './components/AddTask'
import NavBar from './components/NavBar'
import Task from './components/Task'

const App = () => {
  const [todos, setTodos] = useState(
    [
      { id: 1, task: "Learn ReactJs" },
      { id: 2, task: "Wash clothes" },
      { id: 3, task: "Team meeting at 8" },
      { id: 4, task: "Visit a friend" }
    ]

  )


  const addTask = (task) => {
    setTodos([...todos, task])


  }
  return (
    <div>
      <NavBar />
      <AddTask addtask={addTask} />
      <Task todos={todos} />

    </div>
  )
}

export default App