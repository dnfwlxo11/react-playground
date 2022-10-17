import { useParams } from "react-router-dom";

function Article() {
    const { id } = useParams();

    return (
        <div>
            <h2>게시글 {id}</h2>
            <p>게시글 {id} 내용</p>
        </div>
    );
}

export default Article;