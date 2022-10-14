import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <h1>About</h1>
            <p>About 페이지</p>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default About;