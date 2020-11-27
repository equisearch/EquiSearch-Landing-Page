import React from 'react'

const MobileNav = (props) => {

    // variables
    const { display } = props; // set display to true when hamburger menu is clicked (mobileNav is opened)
    const { open } = props; // sets openModal to true

    // functions 
    const handleClick = () => {
        open();
    }

    return (
        <div className={`mobile-nav ${display === false ? "none" : "block"}`}>
            <nav>
                <ul className="container">
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="#About" className="nav-link">About</a></li>
                    <li><a href="#Team" className="nav-link">Team</a></li>
                    <li><a href="#Contact" className="nav-link">Contact</a></li>
                    <li><button type="button" className="nav-link" onClick={handleClick}>SUBSCRIBE</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav
