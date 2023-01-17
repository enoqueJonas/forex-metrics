import React from 'react';
import Pair from '../Pair/Pair';
import './PairList.css';

const PairList = () => (
    <div className='pair-list-wrap'>
        <p className='category-type'>Pairs by name</p>
        <div className="pair-list">
            <Pair />
            <Pair />
            <Pair />
            <Pair />
            <Pair />
            <Pair />
        </div>
    </div>
);

export default PairList;