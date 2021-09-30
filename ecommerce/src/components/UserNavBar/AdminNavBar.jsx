import { Link } from 'react-router-dom';
import './AdminNavBar.css';


function AdminNavBar() {
    return (
        <nav className="NavBar">
            <ul>
                <Link to='/'>
                    <li><a>Home</a></li>
                </Link>
                <Link to='/about'>
                    <li><a>List Product</a></li>
                </Link>
                <Link to='/list'>
                    <li><a>Logout</a></li>
                </Link>
            </ul>
        </nav>
    );
}


export default AdminNavBar;
