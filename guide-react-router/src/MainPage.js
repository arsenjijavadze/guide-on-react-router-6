import { useNavigate, Link, Outlet } from 'react-router-dom';

export const MainPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => navigate('one', { raplace: false })}>
                            Page One
                        </button>{' '}
                        - <Link to="one/1">P1</Link>
                        , <Link to="one/2">P2</Link>
                    </li>
                    <li>
                        <button onClick={() => navigate('two', { replace: false })}>
                            Page Two
                        </button>{' '}
                        - <Link to="two/1">P1</Link>
                        , <Link to="two/2">P2</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    );
}

