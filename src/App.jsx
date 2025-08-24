import React from 'react'
import Create from './components/Create.jsx'
import Read from './components/Read.jsx'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Learn React",
      isDone: false
    }
  ])

  return (
    <div className='flex gap-10 items-center justify-around bg-blue-950 min-h-screen'>
      <Create todos={todos} setTodos={setTodos}/>
      <Read todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
