import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
  const { input, todos, onChangeInput, onInsert, onToggle, onRemove } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  }

  const onChange = (e) => {
    onChangeInput(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}></input>
        <button type='submit'>등록</button>
      </form>
      <div>
        {todos && todos.map((todo) => {
            return <TodoItem 
              todo={todo} 
              onToggle={onToggle} 
              onRemove={onRemove} 
              key={todo.id}>
            </TodoItem>
          })
        }
      </div>
    </div>
  )
}

export default Todos