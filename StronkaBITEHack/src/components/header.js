import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">O projekcie</Link></li>
                    <li><Link to="/organizers">Organizatorzy</Link></li>
                    <li><Link to="/regulations">Regulamin</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;