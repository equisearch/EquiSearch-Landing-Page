import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import whitetext from "../assets/whitetext.svg";
import MobileNav from './MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav';

const Header = () => {

    // state 
    const [mobileNav, setMobileNav] = useState(false);
    const [nav, setNav] = useState(false);

    // functions
    const toggleMobileNav = () => {
        setMobileNav(mobileNav => !mobileNav);
    }

    return (
        <header>
            <div className="flex align-center flex-between">
                <div className="flex align-center">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="logo-text">
                        <img src={whitetext} alt="logo text"/>
                    </div>
                </div>
                <button type="button" onClick={toggleMobileNav} className="menu-btn">
                    <FontAwesomeIcon icon={faBars} style={{
                        color: "#fff",
                        fontSize: "1.5rem"
                    }}/>
                </button>
                <Nav/>
            </div>
            <MobileNav display={mobileNav}/>
        </header>
    )
}

export default Header   