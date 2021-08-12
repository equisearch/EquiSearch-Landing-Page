import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    // variables
    const { open } = props; // sets openModal to true

    // functions
    const handleClick = () => {
        open();
    }

    return (
        <div className="desktop-nav none">
            <nav>
                <ul className="flex align-center">
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="#About" className="nav-link">About</a></li>
                    <li><a href="#Team" className="nav-link">Team</a></li>
                    <li><a href="#Contact" className="nav-link">Contact</a></li>
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><button type="button" className="btn btn-primary" onClick={handleClick}>SUBSCRIBE</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
