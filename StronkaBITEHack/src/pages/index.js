import React from 'react';
import '../styles/global.css';
import Seo from "../components/seo";
import rafon from "../images/Rafonix - przejebane życie.mp4";
import VideoPlayer from "../components/videoPlayerHomePage";
import Header from "../components/header";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div  className={"container"}>
                <div className={"video-container"}>
                    <VideoPlayer videoSrc={rafon} />
                </div>
                <div className={"content-container"}>
                    <h1>Witaj na stronie!</h1>
                    <h3>Tutaj będzie treść</h3>
                </div>
            </div>
        </div>
    );
};

export const Head = () => <Seo title="O projekcie" />

export default HomePage;
