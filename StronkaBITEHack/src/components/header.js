import React from 'react';
import { Link } from 'gatsby';
import bestLogo from "../images/best.png"

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"><img src={bestLogo} alt={"Logo"} style={{width: '5vw', height: '10vh'}}/></Link></li>
                    <li><Link to="/about">O projekcie</Link></li>
                    <li><Link to="/organizers">Organizatorzy</Link></li>
                    <li><Link to="/regulations">Regulamin</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;