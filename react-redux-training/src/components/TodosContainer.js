import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

function TodosContainer(props) {
  const { input, todos, changeInput, insert, toggle, remove } = props;

  return (
    <Todos 
      input={input} 
      todos={todos} 
      onChangeInput={changeInput} 
      onInsert={insert} 
      onToggle={toggle} 
      onRemove={remove}>
    </Todos>
  )
};

export default connect(
  ({todos}) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);