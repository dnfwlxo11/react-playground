import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from  './Main'
import Calc from './Calc/Calc'
import Todo from './Todo/Todo'
import Converter from './Converter/Converter'
import Board from './Board/Board'
import BoardUpload from './Board/pages/Upload'
import BoardContent from './Board/pages/Content'

import './Main.css'

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/calc" element={<Calc />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/converter" element={<Converter />} />
                <Route path="/board" element={<Board />} />
                <Route path="/board/upload" element={<BoardUpload />} />
                <Route path="/board/:uid" element={<BoardContent />} />
            </Routes>
        </Router>
    );
}

export default App