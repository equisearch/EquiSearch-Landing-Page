import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const Typeform = (props) => {
    return (
        <div className="typeform">
            <ReactTypeformEmbed
                url="https://demo.typeform.com/to/njdbt5"
                style={{ 
                    zIndex: 3, 
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "500px"
                }}
            />
        </div>
    )
}

export default Typeform
