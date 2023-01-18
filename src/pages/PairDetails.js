import React from 'react';
import './PairDetails.css';

const PairDetails = () => (
                <div className='pair-details'>
                        <div className="pair-top">
                                <div className='pair-symbol-top'>
                                        <img src="{symbol1Source} "className='symbol' width='40px' height='40px' />
                                        <span className='separator'>vs</span>
                                        <img src="{symbol2Source}" className='symbol' width='40px' height='40px' />
                                </div>
                                <div className='pair-info-wrap-top'>
                                        <p className='pair-info'>props.pair.ticker</p>
                                        <p className='pair-info'>props.pair.bid</p>
                                </div>
                        </div>
                        <div className='details-wrap'>
                                <p className='pair-breakdown'>Pair Breakdown</p>
                                <ul className='details-list'>
                                        <li className='list-item darker'>
                                                <p className='category'>Bid</p>
                                                <p className='value'>1.67826</p>
                                        </li>
                                        <li className='list-item'>
                                                <p className='category'>Bid</p>
                                                <p className='value'>1.67826</p>
                                        </li>
                                        <li className='list-item darker'>
                                                <p className='category'>Bid</p>
                                                <p className='value'>1.67826</p>
                                        </li>
                                        <li className='list-item'>
                                                <p className='category'>Bid</p>
                                                <p className='value'>1.67826</p>
                                        </li>
                                        <li className='list-item darker'>
                                                <p className='category'>Bid</p>
                                                <p className='value'>1.67826</p>
                                        </li>
                                </ul>
                        </div>
                </div>
);

export default PairDetails;