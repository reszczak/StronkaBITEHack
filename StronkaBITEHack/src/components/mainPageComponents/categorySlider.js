import React, { useState, useEffect } from 'react';
import '../../styles/mainPageStyles/categorySlider.css';
import '../../styles/global.css'

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
                body.style.setProperty('--body-background-color', '#0056b3');
                break;
            case 1:
                body.style.setProperty('--body-background-color', '#125653');
                break;
            case 2:
                body.style.setProperty('--body-background-color', '#6712ab');
                break;
            default:
                body.style.setProperty('--body-background-color', '#ffffff');
        }
    }, [activeEvent]);

    return (
        <div>
            <div className="event-slider">
                <div className="arrow left-arrow" onClick={prevEvent}>←</div>
                <div className="event-name">{events[activeEvent].name}</div>
                <div className="arrow right-arrow" onClick={nextEvent}>→</div>
            </div>
        </div>
    );
};

export default CategorySlider;
