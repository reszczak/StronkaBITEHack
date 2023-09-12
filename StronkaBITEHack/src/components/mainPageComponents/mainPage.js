import React from 'react';
import '../../styles/global.css'
import VideoPlayer from './videoPlayerHomePage';
import InfoBlock from './infoBlock';
import CategorySlider from './CategorySlider';
import rafon from '../../images/Rafonix - przejebane życie square.mp4';
import rafonIN from '../../images/rafon_index.jpg';

const MainPage = () => {
    return (
            <div className={"container"}>
                <div className={"video-container"}>
                    <VideoPlayer videoSrc={rafon} />
                </div>
                <div className={"content-container"}>
                    <h1>O projekcie</h1>
                    <InfoBlock
                        imageSrc={rafonIN}
                        title="Kiedy?"
                        content="20-21 stycznia 2k24"
                    />
                    <InfoBlock
                        imageSrc={rafonIN}
                        title="Gdzie?"
                        content="Klub studio"
                    />
                    <CategorySlider/>
                </div>
            </div>
    );
};

export default MainPage;
