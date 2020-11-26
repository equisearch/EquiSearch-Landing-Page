import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    // variables
    const checkIcon = <FontAwesomeIcon icon={faCheckCircle} style={{
        color: "#fff",
        fontSize: "1.125rem"
    }}/>

    return (
        <div className="contact section" id="Contact">
            <div className="container">
                <div className="flex contact-wrap">
                    <div className="membership">
                        <h1 className="title">Become a Member</h1>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                        <ul>
                            <li>{checkIcon}<span>Able to commit 5 hours a week</span></li>
                            <li>{checkIcon}<span>Comfortable in fast-paced environments</span></li>
                            <li>{checkIcon}<span>Diligent and attentive listener</span></li>
                            <li>{checkIcon}<span>Persistant and Communicative</span></li>
                        </ul>
                        <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best!</p>
                    </div>
                    <div className="contact-form">
                        <h1 className="title">Contact Us</h1>
                        <form className="flex direction-column" action="https://formspree.io/f/xwkwnlob" method="POST">
                            <input type="text" className="name input block" name="name" placeholder="Name"/>
                            <input type="email" className="email input block" name="_replyto" placeholder="Email"/>
                            <textarea className="message input block" name="message" placeholder="Message"></textarea>
                            <button type="submit" className="btn block">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
