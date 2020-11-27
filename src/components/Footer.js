import React from 'react';
import logo from "../assets/logo.svg";
import whitetext from "../assets/whitetext.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhoneAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    // variables
    const sendIcon = <FontAwesomeIcon icon={faPaperPlane} style={{
        color: "#848484",
        fontSize: "0.8rem"
    }}/>;
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} style={{
        color: "#848484",
        fontSize: "0.8rem"
    }}/>;
    const userIcon = <FontAwesomeIcon icon={faUserPlus} style={{
        color: "#848484",
        fontSize: "0.8rem"
    }}/>;

    return (
        <div className="footer section">
            <footer className="container">
                <div className="flex footer-wrap">
                    <div className="info sub-section">
                        <div className="logo-wrap flex align-center">
                            <div className="logo flex align-center">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="logo-text">
                                <img src={whitetext} alt="text"/>
                            </div>
                        </div>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain.</p>
                    </div>
                    <div className="pages sub-section">
                        <h2 className="title-left">Pages</h2>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#About">About</a></li>
                                <li><a href="#Team">Team</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-contact sub-section">
                        <h2 className="title-left">Contact Us</h2>
                        <ul className="contact-info">
                            <li>{phoneIcon}<a href="tel:123-456-7890">123-456-7890</a></li>
                            <li>{sendIcon}<a href="mailto: equisearched@gmail.com" target="_blank" rel="noreferrer">equisearched@gmail.com</a></li>
                            <li>{userIcon}<a href="https://www.linkedin.com/company/equisearch/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
