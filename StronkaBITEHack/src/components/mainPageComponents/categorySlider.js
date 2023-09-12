import React, { useState } from 'react';
// import '../../styles/global.css';
import '../../styles/mainPageStyles/categorySlider.css'

const CategorySlider = () => {
    const events = [
        { name: "Klasyczna", link: "https://soundcloud.com/user-491399914/rafonix-blachary" },
        { name: "Robotyczna", link: "https://soundcloud.com/flajlemon/rafonixinawetkiedybedesam" },
        { name: "GameJam", link: "https://soundcloud.com/jakub-ok-a-maxy/rafonix-szaman-ai-cover" }
    ];
    const [activeEvent, setActiveEvent] = useState(0);

    const nextEvent = () => {
        setActiveEvent((prev) => (prev + 1) % events.length);
    };

    const prevEvent = () => {
        setActiveEvent((prev) => (prev - 1 + events.length) % events.length);
    };

    return (
        <div>
            <h2>Kategoria</h2>
            <div className="event-slider">
                <div className="arrow left-arrow" onClick={prevEvent}>←</div>
                <div className="event-name">{events[activeEvent].name}</div>
                <div className="arrow right-arrow" onClick={nextEvent}>→</div>
            </div>
            <div className="event-slider">
                <a href={events[activeEvent].link} target="_blank" rel="noopener noreferrer">
                    <button className="event-button">Zapisz się!</button>
                </a>
            </div>
        </div>
    );
};

export default CategorySlider;
