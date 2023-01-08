import React from 'react'

function TodoItem(props) {
  const { todo, onToggle, onRemove } = props;

  return (
    <div>
      <input 
        type='checkbox'
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}>  
      </input>
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  )
}

export default TodoItem