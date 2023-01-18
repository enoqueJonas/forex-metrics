import React from 'react';

const PairDetails = () => (
                <div className='pair-details'>
                        <div className="pair">
                                <div className='pair-symbol'>
                                        <img src="{symbol1Source} "className='symbol' width='40px' height='40px' />
                                        <span className='separator'>vs</span>
                                        <img src="{symbol2Source}" className='symbol' width='40px' height='40px' />
                                </div>
                                <div className='pair-info-wrap'>
                                        <p className='pair-info'>props.pair.ticker</p>
                                        <p className='pair-info'>props.pair.bid</p>
                                </div>
                        </div>
                </div>
);

export default PairDetails;