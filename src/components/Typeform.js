import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Typeform = (props) => {
    return (
        <div className="typeform relative">
            <button className="close-btn fixed cursor" onClick={() => props.setSubmit(false)}><FontAwesomeIcon icon={faTimes} /></button>
            <ReactTypeformEmbed
                url="https://demo.typeform.com/to/njdbt5"
                style={{ 
                    zIndex: 3, 
                    position: "fixed"
                }}
            />
        </div>
    )
}

export default Typeform
