import React from 'react';
import logo from "../assets/logo.svg";
import whitetext from "../assets/whitetext.svg";

const Header = () => {
    return (
        <header className="flex align-center">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="logo-text">
                <img src={whitetext} alt="logo text"/>
            </div>
        </header>
    )
}

export default Header   