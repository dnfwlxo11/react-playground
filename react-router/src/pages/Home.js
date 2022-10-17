import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>홈페이지</p>
            <ul>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/articles"}>게시글 목록</Link>
                </li>
                <li>
                    <Link to={"/profiles/daein"}>Daein 이에요</Link>
                </li>
                <li>
                    <Link to={"/profiles/gildong"}>홍길동 입니다.</Link>
                </li>
                <li>
                    <Link to={"/profiles/void"}>존재하지 않는 프로필</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;