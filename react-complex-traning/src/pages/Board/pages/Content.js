import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

function ContentPage() {
    const [Contents, setContents] = useState([])
    const [Content, setContent] = useState({})
    const contentUid = useParams().uid
    const navigate = useNavigate()

    useEffect(() => {
        const contents = JSON.parse(localStorage.getItem('contents'))
        
        if (contents) {
            setContents(contents)
            setContent(contents.filter(item => item.uid === parseInt(contentUid))[0])
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('contents', JSON.stringify(Contents))
        console.log('change Contents array')
    }, [Contents])

    const onDeleteEvent = (e) => {
        const newArr = Contents.filter(item => item.uid !== parseInt(contentUid))
        setContents(newArr)

        setTimeout(() => {
            navigate('/board')
        }, 100)
    }

    return (
        <div>
            <div className='text-center'>
                <i className='icon mdi mdi-chevron-left' onClick={() => { navigate('/board') }}></i>
            </div>
            <div className='card m-auto mb-3'>
                <div className='row m-0 p-3'>
                    제 목 : {Content.title}
                </div>
                <hr />
                <div className='row m-0 p-3'>
                    작성자 : {Content.author}
                </div>
                <hr />
                <div className='row m-0 p-3'>
                    작성일 : {Content.date}
                </div>
                <hr />
                <div className='row m-0 p-3'>
                    내 용 : {Content.body}
                </div>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-outline-primary' onClick={onDeleteEvent}>삭 제</button>
            </div>
        </div>
    );
};

export default ContentPage;