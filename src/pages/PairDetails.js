import React from 'react';
import { useSelector } from 'react-redux';
import './PairDetails.css';

const PairDetails = () => {
  const pair = useSelector((state) => state.pairDetailsReducer);
  return (
                <div className='pair-details'>
                        <div className="pair-top">
                                <div className='pair-symbol-top'>
                                        <img src={pair.symbol1Source} className='symbol' width='40px' height='40px' />
                                        <span className='separator'>vs</span>
                                        <img src={pair.symbol2Source} className='symbol' width='40px' height='40px' />
                                </div>
                                <div className='pair-info-wrap-top'>
                                        <p className='pair-info'>{pair.ticker}</p>
                                        <p className='pair-info'>{pair.bid}</p>
                                </div>
                        </div>
                        <div className='details-wrap'>
                                <p className='pair-breakdown'>Pair Breakdown</p>
                                <ul className='details-list'>
                                        <li className='list-item darker'>
                                                <p className='category'>Open</p>
                                                <p className='value'>{pair.open}</p>
                                        </li>
                                        <li className='list-item'>
                                                <p className='category'>Bid</p>
                                                <p className='value'>{pair.bid}</p>
                                        </li>
                                        <li className='list-item darker'>
                                                <p className='category'>Ask</p>
                                                <p className='value'>{pair.ask}</p>
                                        </li>
                                        <li className='list-item'>
                                                <p className='category'>High</p>
                                                <p className='value'>{pair.high}</p>
                                        </li>
                                        <li className='list-item darker'>
                                                <p className='category'>Low</p>
                                                <p className='value'>{pair.low}</p>
                                        </li>
                                </ul>
                        </div>
                </div>
  );
};

export default PairDetails;