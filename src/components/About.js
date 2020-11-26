import React from 'react'
import LinkButton from './LinkButton';

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
                        <h3>Lorem Ipsum is not simply random text</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="button">
                            <LinkButton text="OUR TEAM" link="/"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
