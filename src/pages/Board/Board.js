import { useNavigate } from 'react-router';

import './Board.css'
import { useEffect, useState } from 'react';

function BoardPage() {
    const navigate = useNavigate()

    let Contents = JSON.parse(localStorage.getItem('contents'))
    console.log(Contents, 'Contents')

    return(
        <div className='container'>
            <div className='text-center'>
                <i className='icon mdi mdi-chevron-left' onClick={() => { navigate('/') }}></i>
            </div>
            <div className='mb-5 board-body'>
                {Contents.map((content) => {
                    return(
                        <div className='row board-btn mb-2' onClick={ () => { navigate(`/board/${content.uid}`, { content: content })} }>
                            <div className='board-inner'>{content.title}</div>
                        </div>
                    ) 
                })}
            </div>
            <div className='row'>
                <div className='col-6 ml-auto mr-auto'>
                    <button className='w-100 btn btn-outline-primary' onClick={ () => { navigate('/board/upload') }}>등 록</button>
                </div>
            </div>
        </div>
    );
}

export default BoardPage;