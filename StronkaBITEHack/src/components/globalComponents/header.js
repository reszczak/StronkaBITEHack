import React from 'react';
import bestLogo from "../../images/best.png"

const Header = ({ scrollToSection }) => {
    return (
        <div className={"header-container"}>
            <nav>
                <ul className={"header-ul"}>
                    <li>
                        <button className={"header-button-logo"} onClick={() => scrollToSection('main')}>
                            <img src={bestLogo} alt={"Logo"} style={{ width: '5vw', height: '10vh' }} />
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
                </ul>
            </nav>
        </div>
    );
};

export default Header;
