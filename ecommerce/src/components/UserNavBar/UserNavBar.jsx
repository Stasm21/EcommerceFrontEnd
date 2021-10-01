import React from 'react';
import { Link } from 'react-router-dom';



function UserNavBar() {
    return (
        <div>
            <nav className="UserNavBar">
                <ul>
                    <Link to='/'>
                        <li><a>Home</a></li>
                    </Link>

                    <Link to="/shopping-cart">
                        <li><a>Shopping Cart</a></li>
                    </Link>

                    <Link to='/logout'>
                        <li><a>Logout</a></li>
                    </Link>

                </ul>
            </nav>

        </div>
    );
}


export default UserNavBar;
