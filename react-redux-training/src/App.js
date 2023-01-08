import './App.css';

import TodosContainer from './components/TodosContainer';
import CounterContainer from './components/CounterContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <hr></hr>
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
