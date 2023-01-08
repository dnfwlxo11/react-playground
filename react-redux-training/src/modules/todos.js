const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input
});

let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = (id) => ({
  type: TOGGLE,
  id
});

export const remove = (id) => ({
  type: REMOVE,
  id
});

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'content-1',
      done: true,
    },
    {
      id: 2,
      text: 'content-2',
      done: false,
    },
  ]
}

function todos(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };

    case INSERT:
      console.log(state.todos, action.todo)
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };

    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.id ? {
            ...todo, done: !todo.done
          } : todo
        })
      };

    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

export default todos;