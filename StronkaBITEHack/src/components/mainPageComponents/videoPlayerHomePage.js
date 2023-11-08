import React, { useRef } from 'react';
import '../../styles/mainPageStyles/videoPlayer.css';

const VideoPlayer = ({ videoSrc }) => {
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        }
        else {
            videoRef.current.pause();
        }
    };

    return (
        <div className="video-container" onClick={togglePlay}>
            <video ref={videoRef} autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />
                <track kind="captions" srcLang="pl" label="Polskie napisy" />
                Twoja przeglądarka nie obsługuje odtwarzania filmów.
            </video>
        </div>
    );
};

export default VideoPlayer;
