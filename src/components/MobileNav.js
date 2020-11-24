import React from 'react'

const MobileNav = (props) => {

    const { display } = props;

    return (
        <div className={`mobile-nav ${display === false ? "none" : "block"}`}>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Purpose</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Join Us</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav
