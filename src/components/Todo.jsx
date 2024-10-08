import React from 'react'


const Todo = ({ todo }) =>{
    return (
        <div className="todo">
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">
            {todo.category}
          </p>
        </div>
        <button className="complete">Completar</button>
          <button className="delete">X</button>
      </div>
    )
}

export default Todo