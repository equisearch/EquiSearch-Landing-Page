import React from 'react'
import LinkButton from '../utils/LinkButton';

const About = () => {

    const img = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

    return (
        <div className="about section" id="About">
            <div className="container">
            <h1 className="title">About Us</h1>
                <div className="flex">
                    <div className="about-img">
                        <img src={img} alt="teamwork"/>
                    </div>
                    <div className="about-info">
                        <h3>What is EquiSearch?</h3>
                        <p>EquiSearch is a platform streamlining the independent research process for students. </p>
                        <p>Through a collection of massive online open curricula, project-based learning, and mentorship, students are equipt with the resources they need to thrive in the academic independent research environment.</p>
                        <p>Schedule a time to meet with our team or read our product guide here:</p>
                        <div className="button">
                            <LinkButton text="OUR TEAM" link="#Team"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
