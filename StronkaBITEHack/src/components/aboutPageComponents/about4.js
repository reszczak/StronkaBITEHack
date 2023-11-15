import React, { useEffect } from 'react';
import '../../styles/global.css'
import '../../styles/aboutPageStyles/about4.css'
import rafonA1 from "../../images/rafon-about1.jpg";
import pega from "../../images/Pega_Logo.jpg"
import unit8 from "../../images/unit8_logo.jpg"
import avsystem from "../../images/avsystem_logo.jpg"
import sabre from "../../images/sabre-2-logo-png-transparent.jpg"
import aptiv from "../../images/Aptiv_Logo.jpg"
import ibm from "../../images/IBM_logo_in.jpg"
import hy from "../../images/hackyeah_logo_czarne.jpg"

const About4 = () => {

    useEffect(() => {
        const pictures = document.querySelectorAll('.partner-img, .a4-img');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                } else {
                    entry.target.classList.remove('appear');
                }
            });
        });

        pictures.forEach((picture) => {
            observer.observe(picture);
        });
    }, []);

    return (
        <div className={"about4-container"}>
            {/*<div className={"about4-content"}>*/}
                {/*<h2 className={"about4-partner-main"}>Partner Główny</h2>*/}
                {/*<div className={"about4-image-container"}>*/}
                {/*    <img className={"a4-img"} src={pega} alt={"pega"}/>*/}
                {/*</div>*/}
                {/*<h1 className={"about4-partner"}>Partnerzy</h1>*/}
            {/*</div>*/}
            <h1 className={"about4-partner"}>Partnerzy wydarzenia</h1>
            <div className={"partner-images"}>
                <img className={"partner-img"} src={unit8} alt={"unit8"}/>
                <img className={"partner-img"} src={avsystem} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={sabre} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={aptiv} alt={"rafon-partner"}/>
            </div>
            <h1 className={"about4-partner"}>Partnerzy medialni</h1>
            <div className={"partner-images"}>
                <img className={"partner-img"} src={unit8} alt={"unit8"}/>
                <img className={"partner-img"} src={avsystem} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={sabre} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={aptiv} alt={"rafon-partner"}/>
            </div>
        </div>
    )
}

export default About4