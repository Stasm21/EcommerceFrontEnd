import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
    return (
        <div>
            <nav className="NavBar">
                <ul>
                    <Link to='/'>
                        <li><a>Home</a></li>
                    </Link>

                    <Link to="/registration">
                        <li><a>Register</a></li>
                    </Link>

                    <Link to='/login'>
                        <li><a>Login</a></li>
                    </Link>

                </ul>
            </nav>

        </div>
    );
}


export default NavBar;
