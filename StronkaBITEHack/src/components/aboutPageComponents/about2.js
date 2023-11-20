import React from 'react';
import '../../styles/global.css'
import '../../styles/aboutPageStyles/about2.css'
import about2img from "../../images/Page_images/about2img.png";

const About2 = () => {
    return (
        <div className={"about2-container"}>
            <div className={"about2-desc-container"}>
                <div className={"about2-category"}>
                    <h2 className={"about2-h2"}>Kategoria klasyczna</h2>
                    <p className={"about2-text"}>
                        Zadaniem waszej drużyny będzie rozwiązanie zadanego problemu poprzez nadanie
                        swoim pomysłom odpowiedniego kształtu. Macie swój ulubiony język programowania?
                        Bardzo dobrze się składa! Na BITEhacku macie pełną dowolność,
                        a rozwiązanie problemu zależy tylko od waszej twórczości!
                    </p>
                </div>
                <div className={"about2-category"}>
                    <h2 className={"about2-h2"}>Kategoria robotyczna</h2>
                    <p className={"about2-text"}>
                        Waszym zadaniem będzie zbudowanie i zaprogramowanie od podstaw działającego robota,
                        a to wszystko przy kompleksowym wsparciu mentorów. Używać będziecie platformy
                        programistycznej, dodatkowych narzędzi, a także innych niezbędnych komponentów,
                        które my Wam zapewnimy. Do dzieła!
                    </p>
                </div>
                <div className={"about2-category"}>
                    <h2 className={"about2-h2"}>Kategoria GameJam</h2>
                    <p className={"about2-text"}>
                        Wasz zespół zmierzy się z wyzwaniem stworzenia gry, która oczaruje nasze jury.
                        Wasze rozwiązanie musi spełniać założenia określone w temacie kategorii, ogłoszone
                        w chwili rozpoczęcia wydarzenia. Może być to gra przeglądarkowa, komputerowa lub mobilna.
                        Pełna dowolność co do środowiska pozwoli Wam w pełni uwydatnić waszą kreatywność.
                    </p>
                </div>
            </div>
            <div className={"about2-img-title"}>
                <div className={"about2-paragraph-container"}>
                    <h2 className={"about2-title"}>Trzy kategorie</h2>
                </div>
                <img className={"a2-img"} src={about2img} alt={"about2img"}/>
            </div>
        </div>
    )
}

export default About2