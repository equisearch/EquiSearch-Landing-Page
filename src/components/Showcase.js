import React, { useState, useEffect } from 'react';

const Showcase = () => {

    const [email, setEmail] = useState("");

    const handleEmailInput = e => {
        e.preventDefault();
        setEmail("");
    }

    return (
        <div className="showcase">
            <div className="container">
                <form onSubmit={handleEmailInput}>
                    <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
                    <button className="btn btn-primary">Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default Showcase
