import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
    return (
        <div>
            <nav className="navbar">
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

                    <Link to="/add-product">
                        <li><a>Add Product</a></li>
                    </Link>

            <h1 className="navbar_logo">SparkPlugs ™</h1>
                </ul>
            </nav>

        </div>
    );
}


export default NavBar;
