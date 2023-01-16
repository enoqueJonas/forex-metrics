import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
        <nav>
            <ul className="navmenu">
                <NavLink to='/'></NavLink>
            </ul>
        </nav>
);

export default Navbar;