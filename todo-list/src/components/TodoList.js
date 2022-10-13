import TodoListItem from "./TodoListItem";

function TodoList(props) {
    const todos = props.todos;
    const onRemove = props.onRemove;
    const onToggle = props.onToggle;

    return (
        <div className="TodoList">
            {todos.map((todo) => {
                return <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            })}
        </div>
    )
}

export default TodoList;