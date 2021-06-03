import React from 'react'

const Button = (props) => {

    // text is the content for the button, ex: "submit"
    const { text } = props;

    return (
        <div>
            <button type="button" className="btn btn-primary">{text}</button>
        </div>
    )
}

export default Button
