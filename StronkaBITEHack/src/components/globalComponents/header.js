import React from 'react';
import bestLogo from "../images/best.png"

const Header = ({ scrollToSection }) => {
    return (
        <div className="header-container">
            <nav>
                <ul>
                    <li>
                        <button onClick={() => scrollToSection('main')}>
                            <img src={bestLogo} alt={"Logo"} style={{ width: '5vw', height: '10vh' }} />
                        </button>
                    </li>
                    <li><button onClick={() => scrollToSection('about1')}>O projekcie 1</button></li>
                    <li><button onClick={() => scrollToSection('about2')}>O projekcie 2</button></li>
                    <li><button onClick={() => scrollToSection('about3')}>O projekcie 3</button></li>
                    <li><button onClick={() => scrollToSection('about4')}>O projekcie 4</button></li>
                    <li><button onClick={() => scrollToSection('organizers')}>Organizatorzy</button></li>
                    <li><a href={'https://soundcloud.com/flajlemon/rafonixinawetkiedybedesam'} target="_blank" rel="noopener noreferrer">
                        <button>Regulamin</button>
                    </a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
