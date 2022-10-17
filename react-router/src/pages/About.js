import { Link, useLocation, useSearchParams } from 'react-router-dom';

function About() {
    console.log('about');
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');
    console.log('searchParams, detail, mode', searchParams, detail, mode);

    const onToggleDetail = () => {
        setSearchParams({ mode, detail: detail === 'true' ? false : true });
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({ mode: nextMode, detail });
    }

    return (
        <div>
            <h1>About</h1>
            <p>About 페이지</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    )
}

export default About;