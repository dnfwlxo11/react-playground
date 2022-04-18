import Todo from './Todo'
import Converter from './Converter'
import Calc from './Calc'
import Board from './Board'

import './Main.css'

const iterArr = (routeArr, koreanName) => {
    routeArr.map((route, idx) => {
        <Route path="/" component={route} />
    })
}

function MainPage() {
    const routeArr = ['Calc', 'Converter', 'Board', 'Todo']
    const koreanName = ['계산기', '단위변환', '게시판', 'Todo 리스트']

    return (
        <div className="container">
            <div className='card'>
                <div className='card-body'>
                    <BrowserRouter>
                        <Router path="/" component={Calc} />
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default MainPage