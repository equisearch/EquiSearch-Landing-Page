import React from 'react';
import Slider from "react-slick";
import LinkButton from "./LinkButton";

const Carousel = () => {

    const images = [
        {
            id: 1,
            text: {
                main: "What is Lorem Ipsum",
                sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            button: {
                text: "ABOUT",
                link: "/"
            },
            url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        },
        {
            id: 2,
            text: {
                main: "Why do we use it",
                sub: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            button: {
                text: "SUBSCRIBE",
                link: "/"
            },
            url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 3,
            text: {
                main: "Where does it come from",
                sub: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            },
            button: {
                text: "GET IN TOUCH",
                link: "/"
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
