import { useState } from 'react'
import { useNavigate } from 'react-router'
import { format } from 'date-fns'

export function UploadPage() {
    const navigate = useNavigate()

    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')
    const [Author, setAuthor] = useState('')

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeBody = (e) => {
        setBody(e.target.value)
    }

    const onChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const submitContent = () => {
        const contents = JSON.parse(localStorage.getItem('contents'))
        const now = format(new Date(), 'yyyy-MM-dd HH:mm:ss')

        contents.push({
            uid: contents.length + 1,
            title: Title,
            body: Body,
            author: Author,
            date: now
        })

        localStorage.setItem('contents', JSON.stringify(contents))

        navigate('/board')
    }

    return (
        <div className='container'>
            <div className='row mb-3'>
                <div className='col-2 text-left'>
                    제 목 : 
                </div>
                <div className='col-6 text-left'>
                    <input type='text' className='w-100' onChange={onChangeTitle}></input>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-2 text-left'>
                    내 용 : 
                </div>
                <div className='col-6 text-left'>
                    <textarea className='w-100' onChange={onChangeBody}></textarea>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-2 text-left'>
                    작성자 : 
                </div>
                <div className='col-6 text-left'>
                    <input type='text' className='w-100' onChange={onChangeAuthor}></input>
                </div>
            </div>
            <div>
                <button className='btn btn-outline-primary' onClick={submitContent}>등 록</button>
            </div>
        </div>
    );
};

export default UploadPage