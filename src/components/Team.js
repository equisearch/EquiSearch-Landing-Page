import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

const Team = () => {

    // state
    const [slides, setSlides] = useState(1);
    useEffect(() => {
        let width = screenWidth(window.screen.width); // returns a number between 1 and 3 based of width of screen
        setSlides(width);
    }, []);

    // functions
    const screenWidth = (width) => {
        if (width < 768) { // smaller devices return 1
            return 1;
        } else if (width >= 768 && width < 1024) { // tablet devices return 2
            return 2
        } else { // desktop or greater, return 3
            return 3;
        }
    }

    const teamMembers = [
        {
            id: 1,
            name: "Scott Blender",
            img: "",
            role: "Co-Founder"
        },
        {
            id: 2,
            name: "Regina Liu",
            img: "",
            role: ""
        },
        {
            id: 3,
            name: "Kevin Wang",
            img: "",
            role: "Co-Founder"
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slides, // 1, 2, or 3 based on slides state
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
    };

    return (
        <div className="team section">
            <div className="container">
                <h1 className="title">Our Team</h1>
                <Slider {...settings}>
                    {teamMembers.map(member => {
                        return (
                            <div key={member.id}>
                                {member.name}
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Team
