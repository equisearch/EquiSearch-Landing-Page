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
        <div className="showcase">
            <div className="container">
                <form onSubmit={handleEmailInput}>
                    <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
                    <button className="btn btn-primary">Get Started</button>
                </form>
                {submit ? <Typeform setSubmit={setSubmit}/> : ""}
            </div>
        </div>
    )
}

export default Showcase
