import { BrowserRouter as Router, Link } from 'react-router-dom'

function MainPage() {
    const routeJson = {
        '/calc': {
            name: '계산기',
            img: '/images/calc.png'
        }, 
        
        '/converter': {
            name: '단위변환',
            img: '/images/convert.png'
        }, 
        
        '/board': {
            name: '게시판',
            img: '/images/board.png'
        }, 
        
        '/todo': {
            name: 'Todo 리스트',
            img: '/images/todo.png'
        }
    }

    return (
        <div className="container">
            {
                Object.keys(routeJson).map((route, idx) => (
                    <div className='card'>
                        <div className='card-body'>
                            <Link to={route} key={routeJson[route].name}>
                                <img className='menu-image' src={routeJson[route].img}></img>
                                {/* {routeJson[route].name} */}
                            </Link>
                        </div>
                    </div>
                ))
            }    
        </div>      
    );
}

export default MainPage;