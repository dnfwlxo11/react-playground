import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

import CounterContainer from './components/CounterContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <hr></hr>
      <Todos></Todos>
    </div>
  );
}

export default App;
