import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


function NavBar() {
    return (
        <div>
            <nav className="NavBar">
                <ul>
                    <Link to='/'>
                        <li><a>Home</a></li>
                    </Link>
                    <Link to='/about'>
                        <li><a>Products</a></li>
                    </Link>
                    <Link to='/list'>
                        <li><a>Shopping Cart</a></li>
                    </Link>
                    <Link to='/list'>
                        <li><a>Login</a></li>
                    </Link>
                    <Link to='/list'>
                        <li><a>Logout</a></li>
                    </Link>
                </ul>
            </nav>
                
        </div>
    );
}


export default NavBar;
