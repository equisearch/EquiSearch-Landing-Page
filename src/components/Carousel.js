import React from 'react';
import Slider from "react-slick";
import LinkButton from "./LinkButton";

const Carousel = () => {

    const images = [
        {
            id: 1,
            text: {
                main: "What is EquiSearch?",
                sub: "EquiSearch is an online learning platform, like Coursera, streamlining the independent research process for students."
            },
            button: {
                text: "ABOUT",
                link: "#About"
            },
            url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        },
        {
            id: 2,
            text: {
                main: "Our Team",
                sub: "Our team is committed to redefining the undergraduate research experience and ensuring students across the globe can work on groundbreaking research projects."
            },
            button: {
                text: "OUR TEAM",
                link: "#Team"
            },
            url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 3,
            text: {
                main: "Learn more",
                sub: "If you're interested in learning more about EquiSearch, follow us on substack or on Linkedin."
            },
            button: {
                text: "GET IN TOUCH",
                link: "#Contact"
            },
            url: "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {images.map(img => {
                    return (
                        <div key={img.id} className="carousel-wrap relative">
                            <div className="container">
                                <div className="carousel-content center-y">
                                    <h1>{img.text.main}</h1>
                                    <p>{img.text.sub}</p>
                                    <LinkButton text={img.button.text} link={img.button.link}/>
                                </div>
                            </div>
                            <div className="tint"></div>
                            <img src={img.url} alt={img.id}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel
