import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/list'>
                    <li>List</li>
                </Link>
            </ul>
        </nav>
    );
}


export default NavBar;
