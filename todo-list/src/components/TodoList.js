import TodoListItem from "./TodoListItem";

function TodoList(props) {
    const todos = props.todos;

    console.log(todos, 'todos')

    return (
        <div className="TodoList">
            {todos.map((todo) => {
                return <TodoListItem todo={todo} key={todo.id} />
            })}
        </div>
    )
}

export default TodoList;