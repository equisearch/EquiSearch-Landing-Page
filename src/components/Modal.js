import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = (props) => {

    // variables
    const closeIcon = <FontAwesomeIcon icon={faTimes} style={{
        color: "#848484",
        fontSize: "1.5rem"
    }}/>;

    // functions
    const handleClick = e => { // close modal when outside of modal is clicked on
        const element = e.target;
        if (element.className === "modal-wrap relative") {
            props.close();
        }
    }

    return (
        <div className={`modal-bg fixed ${(props.modal) ? "block" : "none"}`} onClick={handleClick}>
            <div className="tint"></div>
            <div className="modal-wrap relative">
                <div className="modal center">
                    <div className="relative content-wrap">
                        <button type="button" className="close absolute cursor" onClick={props.close}>{closeIcon}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal