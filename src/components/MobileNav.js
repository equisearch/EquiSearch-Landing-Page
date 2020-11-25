import React from 'react'

const MobileNav = (props) => {

    const { display } = props;

    return (
        <div className={`mobile-nav ${display === false ? "none" : "block"}`}>
            <nav>
                <ul className="container">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Subscribe</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav
