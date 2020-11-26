import React from 'react';

const Nav = (props) => {

    const handleClick = () => {
        props.modal();
    }

    return (
        <div className="desktop-nav none">
            <nav>
                <ul className="flex align-center">
                    <li><a href="/">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Team">Team</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><button type="button" className="btn btn-primary" onClick={handleClick}>SUBSCRIBE</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
