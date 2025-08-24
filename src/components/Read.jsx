import React from 'react'
import {toast} from 'react-toastify'

const Read = (props) => {
    
    const todos = props.todos
    const setTodos = props.setTodos
    const deleteTodo = (id) => {
        const updatedTodos=todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
        toast.error("Todo Has Successfully Deleted")
    }
    const renderTodos = todos.map((todo, index) => {
        return (
            <li key={index} className='py-2 text-lg bg-gray-200 w-[400px] flex justify-around items-center rounded'><span className='font-bold'>{index + 1}.</span>{todo.todo} <button onClick={() => deleteTodo(todo.id)} className='bg-red-500 text-white py-1 px-4 rounded'>Done</button></li>
        )
    })
    return (
        <div>
            <h1 className='text-6xl font-[300] mb-1 text-white text-center  '>Your <span className='text-blue-400'>Todo's</span></h1>
            <ul className='flex flex-col gap-2'>
                {renderTodos}
            </ul>
        </div>
    )
}

export default Read
