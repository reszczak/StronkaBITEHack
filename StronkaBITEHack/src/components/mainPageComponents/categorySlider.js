import React, { useState } from 'react';
import '../../styles/mainPageStyles/categorySlider.css';

const CategorySlider = ({ onBackgroundColorChange }) => {
    const events = [
        { name: "Klasyczna", link: "https://soundcloud.com/user-491399914/rafonix-blachary" },
        { name: "Robotyczna", link: "https://soundcloud.com/flajlemon/rafonixinawetkiedybedesam" },
        { name: "GameJam", link: "https://soundcloud.com/jakub-ok-a-maxy/rafonix-szaman-ai-cover" }
    ];

    const [activeEvent, setActiveEvent] = useState(0);

    const nextEvent = () => {
        setActiveEvent((prev) => (prev + 1) % events.length);
        onBackgroundColorChange('#aa33aa');
    };

    const prevEvent = () => {
        setActiveEvent((prev) => (prev - 1 + events.length) % events.length);
        onBackgroundColorChange('#557711');
    };

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
