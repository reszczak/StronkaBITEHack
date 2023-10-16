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
        const pictures = document.querySelectorAll('.partner-img');

        const observer = new IntersectionObserver((notes) => {
            notes.forEach((note) => {
                if (note.isIntersecting) {
                    note.target.classList.add('appear');
                }
            });
        });

        pictures.forEach((picture) => {
            observer.observe(picture);
        });
    }, []);

    return (
        <div className={"about4-container"}>
            <div className={"about4-content"}>
                <h2 className={"about4-partner-main"}>Partner Główny</h2>
                <div className={"about4-image-container"}>
                    <img className={"a4-img"} src={pega} alt={"pega"}/>
                </div>
                <h3 className={"about4-partner"}>Partnerzy</h3>
            </div>
            <div className={"partner-images"}>
                <img className={"partner-img"} src={unit8} alt={"unit8"}/>
                <img className={"partner-img"} src={avsystem} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={sabre} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={aptiv} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={ibm} alt={"rafon-partner"}/>
                <img className={"partner-img"} src={hy} alt={"rafon-partner"}/>
            </div>
        </div>
    )
}

export default About4