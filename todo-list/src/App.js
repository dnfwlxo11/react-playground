import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

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
  }, [todos]);

  const onRemove = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  });

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  }, [todos]);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
