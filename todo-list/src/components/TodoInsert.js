import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert(props) {
    const onInsert = props.onInsert;
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (evt) => {
            onInsert(value);
            setValue('');

            evt.preventDefault();
        },
        [onInsert, value]
    )

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;