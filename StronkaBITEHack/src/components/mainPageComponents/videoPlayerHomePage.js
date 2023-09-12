import React from 'react';
import '../../styles/mainPageStyles/videoPlayer.css'

const VideoPlayer = ({ videoSrc }) => {
    return (
        <div className="video-container">
            <video controls autoPlay loop>
                <source src={videoSrc} type="video/mp4" />
                <track kind="captions" srcLang="pl" label="Polskie napisy" />
                Twoja przeglądarka nie obsługuje odtwarzania filmów.
            </video>
        </div>
    );
};

export default VideoPlayer;