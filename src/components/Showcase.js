import React, { useState } from 'react';
import Typeform from './Typeform';

const Showcase = () => {

    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false);

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
                {submit ? <Typeform/> : ""}
            </div>
        </div>
    )
}

export default Showcase
