import React from 'react'
import TodoItem from './TodoItems'

function Todos(props) {
  const { input, todos, onChangeInput, onInsert, onToggle, onRemove } = props;
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input></input>
        <button type='submit'>등록</button>
      </form>
      <TodoItem></TodoItem>
    </div>
  )
}

export default Todos