import React from 'react'

const Todo = ({ todo, deleteTodo, completeTodo }) => {

  const doneInfo = () => {
    return (
      <div>
        <span>This todo is done</span>
        <span>
          <button onClick={deleteTodo(todo)}> Delete </button>
        </span>
      </div>
    )
  }

  const notDoneInfo = () => {
    return (
      <div>
        <span>
            This todo is not done
          </span>
          <span>
            <button onClick={deleteTodo(todo)}>Delete</button>
            <button onClick={completeTodo(todo)}>Set as done</button>
          </span>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
        <span>
          {todo.text} 
        </span>
        {todo.done ? doneInfo() : notDoneInfo()}
      </div>
    </div>
  )
}

export default Todo
