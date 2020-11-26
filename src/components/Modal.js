import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = (props) => {

    const closeIcon = <FontAwesomeIcon icon={faTimes} style={{
        color: "#848484",
        fontSize: "1.5rem"
    }}/>;

    return (
        <div className={`modal-bg fixed ${(props.modal) ? "block" : "none"}`}>
            <div className="tint"></div>
            <div className="modal-wrap relative">
                <div className="modal center">
                    <div className="relative content-wrap">
                        <button type="button" className="close absolute cursor">{closeIcon}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal