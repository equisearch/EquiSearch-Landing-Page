import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = (props) => {

    // variables
    const closeIcon = <FontAwesomeIcon icon={faTimes} style={{
        color: "#848484",
        fontSize: "1.5rem"
    }}/>;
    const iframe = `<iframe src="https://equisearch.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>`;

    // functions
    const handleClick = e => { // close modal when outside of modal is clicked on
        const element = e.target;
        if (element.className === "modal-wrap relative") {
            props.setOpen(false);
        }
    }

    return (
        <div className={`modal-bg fixed ${(props.open) ? "block" : "none"}`} onClick={handleClick}>
            <div className="tint"></div>
            <div className="modal-wrap relative">
                <div className="modal center">
                    <div className="relative content-wrap">
                        <button type="button" className="close absolute cursor" onClick={() => props.setOpen(false)}>{closeIcon}</button>
                        <div dangerouslySetInnerHTML={{__html: iframe}} className="iframe"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal