import { useNavigate } from 'react-router';

function BoardPage() {
    const navigate = useNavigate()

    return(
        <div className='container'>
            <div className='text-center'>
                <i className='icon mdi mdi-chevron-left' onClick={() => { navigate('/') }}></i>
            </div>
        </div>
    );
}

export default BoardPage;