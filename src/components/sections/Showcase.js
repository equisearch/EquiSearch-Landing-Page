import React, { useState } from 'react';
import Typeform from '../utils/Typeform';

const Showcase = () => {

    const [email, setEmail] = useState(""); // save user's email input
    const [submit, setSubmit] = useState(false); 

    // clear input field and set submit to true
    const handleEmailInput = e => {
        e.preventDefault();
        setEmail("");
        setSubmit(true);
    }

    return (
        <div className="showcase relative" id="top">
            <div className="tint"></div>
            <div className="container">
                <div className="showcase-content container">
                    <h1>What is EquiSearch?</h1>
                    <p>EquiSearch is an online learning platform, like Coursera, streamlining the independent research process for students.</p>
                    <form onSubmit={handleEmailInput} className="flex">
                        <input type="text" onChange={e => setEmail(e.target.value)} value={email} className="showcase-input" placeholder="ENTER EMAIL"/>
                        <button className="btn btn-primary">GET STARTED</button>
                    </form>
                </div>
                {submit ? <Typeform setSubmit={setSubmit}/> : ""}
            </div>
        </div>
    )
}

export default Showcase
