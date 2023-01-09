import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

let id = 3;

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, (text) => ({ id: id++, text, done: false }));
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

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

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({ 
      ...state, 
      todos: state.todos.concat(todo) 
    }),
    [TOGGLE]: (state, { payload: id }) => ({ 
      ...state, todos: state.todos.map(todo => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo }
      ) 
    }),
    [REMOVE]: (state, { payload: id }) => ({ 
      ...state, 
      todos: state.todos.filter(todo => todo.id !== id) 
    }),
  },
  initialState
)

export default todos;