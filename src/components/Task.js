import React from 'react'

function Task({ todos }) {
    console.log(todos)
    return (
        <div className="todolist">
            {todos.map(todo => <li className='todo' key={todo.id}><div className='todotask'>{todo.task}</div></li>)}
        </div>
    )
}

export default Task