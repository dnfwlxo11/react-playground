import { Link } from 'react-router-dom'
import staticContents from './Board/static/contents.json'
import staticTodo from './Todo/static/todoValue.json'

import './Main.css'

function MainPage() {
    const routeJson = {        
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

    if (!localStorage.getItem('contents')) localStorage.setItem('contents', JSON.stringify(staticContents))
    if (!localStorage.getItem('todo')) localStorage.setItem('todo', JSON.stringify(staticTodo))

    return (
        <div className="grid-container">
            {
                Object.keys(routeJson).map((route, idx) => (
                    <Link to={route} key={routeJson[route].name}>
                        <div className='card'>
                            <div className='card-body d-flex align-items-center'>
                                <img className='menu-image' src={routeJson[route].img}></img>
                            </div>
                            <div className="menu-title text-center">{ routeJson[route].name }</div>
                        </div>
                    </Link>
                ))
            }
        </div>      
    );
}

export default MainPage;