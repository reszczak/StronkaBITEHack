import React, { useState, useEffect } from 'react';
import '../../styles/global.css';
import '../../styles/aboutPageStyles/about1.css';
import rafonA1 from "../../images/rafon-about1.jpg";

const About1 = () => {
    const [loadingText, setLoadingText] = useState('Loading...');
    const [tip, setTip] = useState('Tip: Hello');

    useEffect(() => {
        const changeText = () => {
            const tips = [
                'Note: Did You know that joining Hackaton is easy?',
                'Tip: Use "Zapisz się" button on main page to start Your adventure!',
                'Fun Fact: Did You know, this is 6th edition of Hackaton?'
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
                    <img className={"a1-img"} src={rafonA1} alt={"rafon-about1"}/>
                    <img className={"a1-img"} src={rafonA1} alt={"rafon-about1"}/>
                </div>
                <div className={"about1-desc-container"}>
                    <h1>O projekcie</h1>
                    <p>
                        Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                        nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                        itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                        exercitationem qui magni deserunt ea voluptatem
                    </p>
                </div>
            </div>
            <div className={"about1-loading-container"}>
                {loadingChars}
                <p>{tip}</p>
            </div>
        </div>
    );
}

export default About1;
