import { Link } from "react-router-dom";

function Articles() {
    return (
        <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
                return (
                    <li>
                        <Link to={`/article/${el}`}>게시글 {el}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Articles;