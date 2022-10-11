import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '1',
      checked: true,
    },
    {
      id: 2,
      text: '2',
      checked: true,
    },
    {
      id: 3,
      text: '3',
      checked: true,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos}></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
