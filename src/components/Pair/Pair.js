import React from 'react';
import './Pair.css';
import dollar from '../../assets/dollar.png';
import euro from '../../assets/euro-currency-symbol.png';

const Pair = () => (
    <div className="pair">
        <div className='pair-symbol'>
            <img src={euro} className='symbol' width='50px' height='50px'/>
            <span className='separator'>vs</span>
            <img src={dollar} className='symbol'width='50px' height='50px'/>
        </div>
        <div className='pair-info-wrap'>
            <p className='pair-info'>EUR/USD</p>
            <p className='pair-info'>1.5666</p>
        </div>
    </div>
);

export default Pair;