import React, { useCallback } from "react";
import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    const todos = props.todos;
    const onRemove = props.onRemove;
    const onToggle = props.onToggle;

    const rowRenderer = useCallback(({ index, key, style }) => {
        const todo = todos[index];

        return (
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        )
    }, [onRemove, onToggle, todos]);

    return (
        <List
            className="TodoList"
            width={512}
            height={512}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{ outline: 'none' }}
        />
        // <div className="TodoList">
        //     {todos.map((todo) => {
        //         return <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
        //     })}
        // </div>
    )
}

export default React.memo(TodoList);