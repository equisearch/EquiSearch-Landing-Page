import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

const Team = () => {

    // state
    const [slides, setSlides] = useState(1);

    // set the state
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

    // variable declarations
    const userImg = "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";
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
        },
        {
            id: 4,
            name: "Jisan Jung",
            img: "",
            role: "Front End Developer"
        }
    ];
    const settings = {
        dots: false,
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
                            <div key={member.id} className="member-item">
                                <div className="info-wrap">
                                    <div className="img-wrap">
                                        <img src={(member.img) ? member.img : userImg} alt={member.name}/>
                                    </div>
                                    <h3>{member.name}</h3>
                                    <span className="block">{(member.role) ? member.role : "EquiSearch Member"}</span>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Team
