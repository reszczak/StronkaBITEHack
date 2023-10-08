import React, { useState, useEffect } from 'react';
import '../../styles/global.css';
import '../../styles/aboutPageStyles/about1.css';
import about1_1 from "../../images/about1img1.png";
import about1_2 from "../../images/about1img2.png";

const About1 = () => {
    const [loadingText, setLoadingText] = useState('Loading...');
    const [tip, setTip] = useState('Info: Hello on our website!');

    useEffect(() => {
        const changeText = () => {
            const tips = [
                'Note: Did You know that joining Hackaton is easy?',
                'Tip: Use "Zapisz się" button on main page to start Your adventure!',
                'Fun Fact: Did You know, this is 6th edition of Hackaton?',
                "Fact: Hackaton's legacy is built on collaboration, creativity, and talent!",
                "Note: If you're interested in joining BEST, learn more about us on our website!",
                "Tip: Remember to share information about the hackathon with your friends!"
            ];
            const randomIndex = Math.floor(Math.random() * tips.length);
            setTip(tips[randomIndex]);
        };

        const interval = setInterval(changeText, 10000);

        return () => clearInterval(interval);
    }, []);

    const loadingChars = loadingText.split('').map((char, index) => (
        <p key={index} className={"loading-text"}>{char}</p>
    ));

    return (
        <div className={"about1-bigger-container"}>
            <div className={"a1-container"}>
                <div className={"about1-image-container"}>
                    <h1></h1>
                    <img className={"a1-img"} src={about1_1} alt={"about1_1"}/>
                    <img className={"a1-img"} src={about1_2} alt={"about1_2"}/>
                </div>
                <div className={"about1-desc-container"}>
                    <h1 className={"about1-h1"}>O projekcie</h1>
                    <p className={"about1-text"}>
                        Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                        nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                        itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                        exercitationem qui magni deserunt ea voluptatem
                    </p>
                </div>
            </div>
            <div className={"about1-loading-container"}>
                {loadingChars}
                <p className={"about1-tip"}>{tip}</p>
            </div>
        </div>
    );
}

export default About1;
