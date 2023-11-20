import React, { useState } from 'react';
import '../../styles/global.css';
import '../../styles/mainPageStyles/main.css';
import VideoPlayer from './videoPlayerHomePage';
import InfoBlock from './infoBlock';
import CategorySlider from './CategorySlider';
import bh_mov from '../../images/Page_images/bh_mov.mp4';
import main1 from '../../images/Page_images/mainimg1.png';
import main2 from '../../images/Page_images/mainimg2.png';
import hackaton from '../../images/Page_images/hackaton.png';
import button1 from '../../images/button1.png';

const MainPage = () => {
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('orange');
    const [imageSrc, setImageSrc] = useState(button1);

    return (
        <div className={"main-container"}>
            <div className={"slider-container"}>
                <VideoPlayer videoSrc={bh_mov} />
                <CategorySlider/>
            </div>
            <div className={"content-container"}>
                <img className={"hackaton-img"} src={hackaton} alt={"hackaton"}/>
                <InfoBlock
                    imageSrc={main1}
                    title="Gdzie?"
                    content="Klub Studio"
                    content2={"Miasteczko Studenckie AGH"}
                />
                <InfoBlock
                    imageSrc={main2}
                    title="Kiedy?"
                    content="20-21.01.2024r"
                    content2={"Zapisy do 10 grudnia!"}
                />
                <div className={"main-button"}>
                    <a href="https://forms.gle/NFEUNQTahEYnPqTFA" target="_blank" rel="noopener noreferrer">
                        <img
                            src={button1}
                            alt="Zapisz się!"
                            className="event-image"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
