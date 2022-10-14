import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>홈페이지</p>
            <Link to={"/about"}>About</Link>
        </div>
    )
}

export default Home;