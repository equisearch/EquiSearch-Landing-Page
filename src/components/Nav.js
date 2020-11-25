import React from 'react';
import Button from "./Button";

const Nav = () => {
    return (
        <div className="desktop-nav none">
            <nav>
                <ul className="flex align-center">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Join Us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><Button text="SUBSCRIBE"/></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
