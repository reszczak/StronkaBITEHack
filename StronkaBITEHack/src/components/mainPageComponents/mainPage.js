import React, { useState } from 'react';
import '../../styles/global.css';
import '../../styles/mainPageStyles/main.css';
import VideoPlayer from './videoPlayerHomePage';
import InfoBlock from './infoBlock';
import CategorySlider from './CategorySlider';
import rafon from '../../images/Rafonix - przejebane życie square.mp4';
import rafonIN from '../../images/rafon_index.jpg';

const MainPage = () => {
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('orange');

    const handleButtonHover = () => {
        setButtonBackgroundColor('#e95800');
    };

    const handleButtonLeave = () => {
        setButtonBackgroundColor('orange');
    };

    return (
        <div className={"container"}>
            <div className={"slider-container"}>
                <VideoPlayer videoSrc={rafon} />
                <CategorySlider/>
            </div>
            <div className={"content-container"}>
                <h1>O projekcie</h1>
                <InfoBlock
                    imageSrc={rafonIN}
                    title="Gdzie?"
                    content="Klub Studio"
                    content2={"Miasteczko Studenckie AGH"}
                />
                <InfoBlock
                    imageSrc={rafonIN}
                    title="Kiedy?"
                    content2="20-21.01.2023"
                />
                <div className="event-slider">
                    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                        <button
                            className="event-button"
                            style={{ backgroundColor: buttonBackgroundColor }}
                            onMouseEnter={handleButtonHover}
                            onMouseLeave={handleButtonLeave}
                        >
                            Zapisz się!
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
