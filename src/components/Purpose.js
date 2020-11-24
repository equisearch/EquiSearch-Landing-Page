import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar, faHandsHelping, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Purpose = () => {

    const info = [
        {
            id: 1,
            text: {
                main: "Research",
                sub: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            },
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            icon: faSearchDollar
        },
        {
            id: 2,
            text: {
                main: "Mentorship",
                sub: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            },
            img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            icon: faHandsHelping
        },
        {
            id: 3,
            text: {
                main: "Sustainability",
                sub: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            },
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1302&q=80",
            icon: faChartLine
        }
    ];

    return (
        <div className="purpose section">
            <div className="container">
                <h1 className="title">Our Purpose</h1>
                <div className="flex">
                    {info.map(item => {
                        return (
                            <div key={item.id} className="purpose-item relative overflow-hidden">
                                <img src={item.img} alt={item.text.main}/>
                                <div className="flex overlay absolute">
                                    <div className="icon flex align-center">
                                        <span>
                                        <FontAwesomeIcon icon={item.icon} style={{
                                            color: "#fff",
                                            fontSize: "1.5rem"
                                        }}/>
                                        </span>
                                    </div>
                                    <div className="text">
                                        <h3>{item.text.main}</h3>
                                        <p>{item.text.sub}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Purpose
