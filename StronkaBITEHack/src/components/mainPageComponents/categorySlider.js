import React, { useState, useEffect } from 'react';
import '../../styles/mainPageStyles/categorySlider.css';
import '../../styles/global.css'
import arrow1 from '../../images/arrow-left.png';
import arrow2 from '../../images/arrow-right.png';

const CategorySlider = ({ onBackgroundColorChange }) => {
    const events = [
        { name: "Klasyczna"},
        { name: "Robotyczna"},
        { name: "GameJam"}
    ];

    const [activeEvent, setActiveEvent] = useState(0);

    const nextEvent = () => {
        setActiveEvent((prev) => (prev + 1) % events.length);
    };

    const prevEvent = () => {
        setActiveEvent((prev) => (prev - 1 + events.length) % events.length);
    };

    useEffect(() => {
        const body = document.body;

        switch (activeEvent) {
            case 0:
                body.style.setProperty('--body-background-color', '#1b2d48');
                break;
            case 1:
                body.style.setProperty('--body-background-color', '#1e2e3c');
                break;
            case 2:
                body.style.setProperty('--body-background-color', '#222858');
                break;
            default:
                body.style.setProperty('--body-background-color', '#1b2d48');
        }
    }, [activeEvent]);

    return (
        <div>
            <div className="event-slider">
                <div className="arrow left-arrow" onClick={prevEvent}>
                    <img className={"arrow-img"} src={arrow1} alt={"arrow1"}/>
                </div>
                <div className="event-name">{events[activeEvent].name}</div>
                <div className="arrow right-arrow" onClick={nextEvent}>
                    <img className={"arrow-img"} src={arrow2} alt={"arrow2"}/>
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;
