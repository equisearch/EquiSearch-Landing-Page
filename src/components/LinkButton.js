import React from 'react'

const LinkButton = (props) => {

    // text is the content in the button ex: "submit"
    // link is where the button will go to when clicked 
    const { text, link } = props

    return (
        <div>
            <a href={link} className="btn btn-primary">{text}</a>
        </div>
    )
}

export default LinkButton
