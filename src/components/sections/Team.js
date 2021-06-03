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
            name: "Scott Blender",
            img: "https://ca.slack-edge.com/T01ADTQ34Q1-U01A7ESKY4C-e915218b7d50-512",
            role: "CEO"
        },
        {
            name: "Kevin Wang",
            img: "https://ca.slack-edge.com/T01ADTQ34Q1-U01A1FG95PV-72f31a2552de-512",
            role: "COO"
        },
        {
            name: "Regina Liu",
            img: "",
            role: "CMO"
        },
        {
            name: "Kenneth Zhang",
            img: "https://ca.slack-edge.com/T01ADTQ34Q1-U01A4QH0D0F-1b185ba5e932-512",
            role: "Machine Learning Engineer"
        },
        {
            name: "Chinmayi Balusu",
            img: "https://ca.slack-edge.com/T01ADTQ34Q1-U01A8B7J8CS-e34a6dbfabc9-512",
            role: "Advisor"
        },
        {
            name: "Winni Zheng",
            img: "https://ca.slack-edge.com/T01ADTQ34Q1-U01ADTUL8CR-6500f9972785-512",
            role: "UI/UX"
        },
        {
            name: "Jason Jung",
            img: "https://ca.slack-edge.com/T01ADTQ34Q1-U01EF9WGLAK-e491204a84b3-512",
            role: "Front End Intern"
        },
        {
            name: "Jacob Shin",
            img: "",
            role: "Back End Intern"
        },
        {
            name: "Jesse Anderson",
            img: "https://ca.slack-edge.com/T01ADTQ34Q1-U01AD637W2H-c5b4add80994-512",
            role: "Back End Intern"
        }
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slides, // 1, 2, or 3 based on slides state
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className="team section" id="Team">
            <div className="container">
                <h1 className="title">Our Team</h1>
                <Slider {...settings}>
                    {teamMembers.map((member, i) => {
                        return (
                            <div key={i} className="member-item">
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
