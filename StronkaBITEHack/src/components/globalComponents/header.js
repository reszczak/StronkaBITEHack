import React from 'react';
import bestLogo from "../../images/best.png"
import Fb from "../../images/fb.png"
import LinkedIn from "../../images/in.png"
import Insta from "../../images/insta.png"

const Header = ({ scrollToSection }) => {
    return (
        <div className={"header-container"}>
            <nav>
                <ul className={"header-ul"}>
                    <li>
                        <button className={"header-button-logo"} onClick={() => scrollToSection('main')}>
                            <img src={bestLogo} alt={"Logo"} />
                        </button>
                    </li>
                    <li><button className={"header-button"} onClick={() => scrollToSection('about1')}>O projekcie</button></li>
                    <li><button className={"header-button"} onClick={() => scrollToSection('organizers')}>Organizatorzy</button></li>
                    <li><a href={'https://soundcloud.com/flajlemon/rafonixinawetkiedybedesam'} target="_blank" rel="noopener noreferrer">
                        <button className={"header-button"}>Regulamin</button>
                    </a></li>
                    <li><a href={'https://soundcloud.com/flajlemon/rafonixinawetkiedybedesam'} target="_blank" rel="noopener noreferrer">
                        <button className={"header-button"}>BEST AGH Kraków</button>
                    </a></li>
                    <li className={"li-blank"}></li>
                    <li>
                        <a href={'https://pl.linkedin.com/company/best-agh-krakow'} target="_blank" rel="noopener noreferrer">
                        <button className={"header-button-link"}>
                            <img src={LinkedIn} alt={"LinkedIn"}/>
                        </button>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.instagram.com/bestkrk/'} target="_blank" rel="noopener noreferrer">
                            <button className={"header-button-link"}>
                                <img src={Insta} alt={"Insta"}/>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href={'https://pl-pl.facebook.com/BEST.AGH.Krakow/'} target="_blank" rel="noopener noreferrer">
                            <button className={"header-button-link"}>
                                <img src={Fb} alt={"Fb"}/>
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
