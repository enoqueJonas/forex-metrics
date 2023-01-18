import React from 'react';
import { NavLink } from 'react-router-dom';
import back from '../../assets/back.png';
import voice from '../../assets/voice.png';
import settings from '../../assets/gear.png';
import './Navbar.css';

const Navbar = () => (
    <nav className='navbar'>
        <NavLink to='/' className='back'>
            <img src={back} width='20px' height='20px'/>
        </NavLink>
        <div className='current-tab'>Pairs</div>
        <ul className="navmenu">
            <li className='nav-item'>
                <a className='nav-link'>
                    <img src={voice} width='20px' height='20px'/>
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link'>
                    <img src={settings} width='20px' height='20px'/>
                </a>
            </li>
        </ul>
    </nav>
);

export default Navbar;