import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const Contact = () => {

    // variables
    const checkIcon = <FontAwesomeIcon icon={faCheckCircle} style={{
        color: "#fff",
        fontSize: "1.125rem"
    }}/>

    return (
        <div className="contact section">
            <div className="container">
                <h1 className="title">Become a Member</h1>
                <div className="flex">
                    <div className="membership">
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                        <ul>
                            <li>{checkIcon}<span>Able to commit 5 hours a week</span></li>
                            <li>{checkIcon}<span>Comfortable in fast-paced environments</span></li>
                            <li>{checkIcon}<span>Diligent and attentive listener</span></li>
                            <li>{checkIcon}<span>Persistant and Communicative</span></li>
                        </ul>
                    </div>
                    <div className="contact-form">
                        <h1 className="title">Contact Us</h1>
                        <form className="flex direction-column" action="https://formspree.io/f/xwkwnlob" method="POST">
                            <input type="text" className="name" name="name"/>
                            <input type="email" className="email" name="_replyto"/>
                            <textarea className="message" name="message"></textarea>
                            <button type="submit" className="btn">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
