import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

function createBulkTodos() {
  const array = [];

  for (let i=1;i<=2500;i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }

      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) => {
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    });
  }, []);

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
