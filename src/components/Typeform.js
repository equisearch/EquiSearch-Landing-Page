import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const Typeform = (props) => {
    return (
        <div className="typeform">
            <ReactTypeformEmbed
                url="https://demo.typeform.com/to/njdbt5"
                style={{ zIndex: 3, position: "fixed" }}
                autoClose={1000}
            />
        </div>
    )
}

export default Typeform
