import { useParams } from "react-router-dom";

const data = {
    daein: {
        name: '임대인',
        description: '임대인이에요'
    },
    gildong: {
        name: '홍길동',
        description: '홍길동입니다.'
    }
};

function Profile() {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    )
}

export default Profile;