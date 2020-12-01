import React, { useState } from 'react';
import logo from "../assets/logo.PNG";
import whitetext from "../assets/whitetext.svg";
import MobileNav from './MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav';

const Header = (props) => {

    // variables
    const { open } = props; // sets openModal to true

    // state 
    const [mobileNav, setMobileNav] = useState(false);

    // functions
    const toggleMobileNav = () => {
        setMobileNav(mobileNav => !mobileNav);
    }

    return (
        <header id="Header">
            <div className="container">
                <div className="flex align-center flex-between">
                    <a href="/" className="block">
                        <div className="flex">
                            <div className="logo flex align-center">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="logo-text flex align-center">
                                <img src={whitetext} alt="logo text"/>
                            </div>
                        </div>
                    </a>
                    <button type="button" onClick={toggleMobileNav} className="menu-btn">
                        <FontAwesomeIcon icon={faBars} style={{
                            color: "#fff",
                            fontSize: "1.5rem"
                        }}/>
                    </button>
                    <Nav open={open}/>
                </div>
            </div>
            <MobileNav display={mobileNav} open={open}/>
        </header>
    )
}

export default Header   