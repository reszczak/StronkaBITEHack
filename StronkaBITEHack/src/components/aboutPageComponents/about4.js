import React from 'react';
import '../../styles/global.css'
import rafonA1 from "../../images/rafon-about1.jpg";

const About4 = () => {
    return (
        <div className={"container"}>
            <div className={"about4-content"}>
                <h2>Partner Główny</h2>
                <div className={"about4-image-container"}>
                    <img className={"a4-img"} src={rafonA1} alt={"rafon-about4"}/>
                </div>
                <h3>Partnerzy</h3>
            </div>
            <div className={"partner-images"}>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
            </div>
        </div>
    )
}

export default About4