import React from 'react'

function TodoItems(props) {
  const { todo, onToggle, onRemove } = props;

  return (
    <div>
      <input type='checkbox'></input>
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  )
}

export default TodoItems