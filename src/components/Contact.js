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
                        <h1 className="title">Join our Team</h1>
                        <p>Get a chance to join a fast-paced startup environment and work towards redefining the undergraduate research experience.</p>
                        <ul>
                            <li>{checkIcon}<span>Able to commit 5 hours a week</span></li>
                            <li>{checkIcon}<span>Comfortable in fast-paced environments</span></li>
                            <li>{checkIcon}<span>Diligent and attentive listener</span></li>
                            <li>{checkIcon}<span>Persistant and Communicative</span></li>
                        </ul>
                        <p>Sign up for company updates <a href="https://equisearched.substack.com/p/coming-soon?r=ep31n&utm_campaign=post&utm_medium=web&utm_source=copy">here</a>!</p>
                    </div>
                    <div className="contact-form">
                        <h1 className="title">Contact Us</h1>
                        <form className="flex direction-column" action="https://formspree.io/f/xbjpapwy" method="POST">
                            <input type="text" className="name input block" name="name" placeholder="Name"/>
                            <input type="email" className="email input block" name="_replyto" placeholder="Email"/>
                            <textarea className="message input block" name="message" placeholder="Message"></textarea>
                            <button type="submit" className="btn btn-secondary block">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
