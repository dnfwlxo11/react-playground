import React from 'react'
import { useNavigate } from 'react-router';

function CalcPage() {
    const navigate = useNavigate()

    return(
        <div className='container'>
            <div className='text-center'>
                <i className='icon mdi mdi-chevron-left' onClick={() => { navigate('/') }}></i>
            </div>
        </div>
    );
}

export default CalcPage;