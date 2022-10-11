import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './Todo.css'

function TodoPage() {
    const navigate = useNavigate()

    const [Contents, setContents] = useState([])
    const [NewContent, setNewContent] = useState('')

    useEffect(() => {
        const contents = JSON.parse(localStorage.getItem('todo'))
        
        if (contents) setContents(contents)
    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(Contents))
    }, [Contents])

    const onSubmitContents = () => {
        if (NewContent === '') return

        setContents([...Contents, NewContent])
        setNewContent('')
    }

    const onChangeNewContent = (e) => {
        setNewContent(e.target.value)
    }

    const deleteTodo = (idx, e) => {
        e.preventDefault()
        Contents.splice(idx, 1)
        setContents([...Contents])
    }

    return(
        <div className='container'>
            <div className='text-center'>
                <i className='icon mdi mdi-chevron-left' onClick={() => { navigate('/') }}></i>
            </div>
            <div className='contents mb-3'>
                {Contents.map((content, idx) => {
                    return(
                        <div key={idx} className='row'>
                            <div className='content col-9'>{content}</div>
                            <div className='col-1'></div>
                            <div className='col-2'>
                                <i className='mdi mdi-close' onClick={(e) => deleteTodo(idx, e)}></i>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='row'>
                <input className='col-9' type="text" placeholder='내용을 입력해주세요.' onChange={onChangeNewContent} value={NewContent}></input>
                <div className='col-1'></div>
                <button className='col-2 btn btn-outline-primary' onClick={onSubmitContents}>등 록</button>
            </div>
        </div>
    );
}

export default TodoPage