import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
import React from 'react';

function TodoListItem(props) {
    const { id, text, checked } = props.todo;
    const onRemove = props.onRemove;
    const onToggle = props.onToggle;
    const style = props.style;

    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className='text'>{text}</div>
                </div>
                <div className='remove' onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}

export default React.memo(TodoListItem);