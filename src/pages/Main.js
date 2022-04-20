import { BrowserRouter as Router, Link } from 'react-router-dom'

import './Main.css'

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
        <div className="grid-container">
            {
                Object.keys(routeJson).map((route, idx) => (
                    <Link to={route} key={routeJson[route].name}>
                        <div className='card'>
                            <div className='card-body'>
                                <img className='menu-image' src={routeJson[route].img}></img>
                                {/* {routeJson[route].name} */}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>      
    );
}

export default MainPage;