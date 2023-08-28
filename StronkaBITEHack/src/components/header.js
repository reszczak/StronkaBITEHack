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
                    <li><button onClick={() => scrollToSection('regulations')}>Regulamin</button></li>
                    <li><button onClick={() => scrollToSection('organizers')}>Organizatorzy</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
