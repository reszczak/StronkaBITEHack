import React, { useEffect } from 'react';
import '../../styles/global.css'
import '../../styles/aboutPageStyles/about4.css'
import pega from "../../images/PW/Pega_Logo.jpg"
import unit8 from "../../images/unit8_logo.jpg"
import avsystem from "../../images/PW/avsystem_logo.jpg"
import sabre from "../../images/PW/sabre-2-logo-png-transparent.jpg"
import aptiv from "../../images/PW/Aptiv_Logo.jpg"
import kpmg from "../../images/PW/kpmg.jpg"
import bit1 from "../../images/PM/bit_festival.png"
import bit2 from "../../images/PM/bit2.png"
import ds from "../../images/PM/dla_studenta.png"
import fx from "../../images/PM/fxmag.png"
import kms from "../../images/PM/kms.png"
import mit from "../../images/PM/meet_it.png"
import ms from "../../images/PM/ms.png"
import sj from "../../images/PM/solid_jobs.png"

const About4 = () => {

    useEffect(() => {
        const pictures = document.querySelectorAll('.partner-img, .a4-img, .patron-img');

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
                <img className={"partner-img"} src={pega} alt={"pega"}/>
                <img className={"partner-img"} src={avsystem} alt={"avsystems"}/>
                <img className={"partner-img"} src={sabre} alt={"sabre"}/>
                <img className={"partner-img"} src={aptiv} alt={"aptiv"}/>
                <img className={"partner-img"} src={kpmg} alt={"kpmg"}/>
            </div>
            <h1 className={"about4-partner"}>Partnerzy medialni</h1>
            <div className={"patron-images"}>
                <img className={"patron-img"} src={bit1} alt={"bit1"}/>
                <img className={"patron-img"} src={ds} alt={"ds"}/>
                <img className={"patron-img"} src={fx} alt={"fx"}/>
                <img className={"patron-img"} src={kms} alt={"kms"}/>
                <img className={"patron-img"} src={bit2} alt={"bit2"}/>
                <img className={"patron-img"} src={mit} alt={"mit"}/>
                <img className={"patron-img"} src={ms} alt={"ms"}/>
                <img className={"patron-img"} src={sj} alt={"sj"}/>
            </div>
        </div>
    )
}

export default About4