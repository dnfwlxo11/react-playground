import React from 'react';
import { useParams } from 'react-router-dom';

function ContentPage() {    
    const contentUid = useParams().uid
    const Contents = JSON.parse(localStorage.getItem('contents'))
    const Content = Contents[contentUid - 1]

    return (
        <div className='card'>
            <div className='row mb-3 m-0 p-0'>
                {Content.title}
            </div>
            <hr />
            <div className='row mb-3 m-0 p-0'>
                {Content.body}
            </div>
        </div>
    );
};

export default ContentPage;