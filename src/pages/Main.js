import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Calc from './Calc/Calc'
// import Todo from './Todo/Todo'
// import Converter from './Converter/Converter'
// import Board from './Board/Board'

import './Main.css'

function MainPage() {
    // const routeArr = ['Calc', 'Converter', 'Board', 'Todo']
    // const koreanName = ['계산기', '단위변환', '게시판', 'Todo 리스트']

    return (
        <div className="container">
            <div className='card'>
                <div className='card-body'>
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path="/calc" element={Calc} />
                        </Routes>
                    </BrowserRouter> */}
                    {/* <>
                        <Link to="/calc">
                            <button>계산기로</button>
                        </Link>
                    </> */}
                </div>
            </div>
        </div>
    );
}

export default MainPage