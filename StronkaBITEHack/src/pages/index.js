import React from 'react';
import '../styles/global.css';
import Seo from "../components/seo";
import rafon from "../images/Rafonix - przejebane życie.mp4";
import rafonIN from "../images/rafon_index.jpg";
import VideoPlayer from "../components/videoPlayerHomePage";
import Header from "../components/header";
import InfoBlock from "../components/InfoBlock"
import CategorySlider from "../components/categorySlider";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className={"container"}>
                <div className={"video-container"}>
                    <VideoPlayer videoSrc={rafon} />
                </div>
                <div className={"content-container"}>
                    <h1>Witaj na stronie!</h1>
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
        </div>
    );
};

export const Head = () => <Seo title="O projekcie" />

export default HomePage;
