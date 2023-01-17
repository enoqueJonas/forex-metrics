import React from 'react';
import './Pair.css';
import dollar from '../../assets/dollar.png';
import euro from '../../assets/euro-currency-symbol.png';
import chf from '../../assets/franc.png';
import jpy from '../../assets/yen.png';
import gbp from '../../assets/pound-symbol-variant.png';
import nok from '../../assets/krone.png';
import aud from '../../assets/australian-dollar.png';
import cad from '../../assets/canadian-dollar.png';
import nzd from '../../assets/dollar-coin.png';

const Pair = (props) => {
  const pair1 = props.pair.ticker.slice(0, 3);
  const pair2 = props.pair.ticker.slice(4, 8);
  const getSymbol1 = () => {
    switch (pair1) {
      case 'EUR':
        return euro;
      case 'USD':
        return dollar;
      case 'GBP':
        return gbp;
      case 'JPY':
        return jpy;
      case 'CHF':
        return chf;
      case 'NOK':
        return nok;
      case 'AUD':
        return aud;
      case 'CAD':
        return cad;
      case 'NZD':
        return nzd;
      default:
        return '';
    }
  };
  const getSymbol2 = () => {
    switch (pair2) {
      case 'EUR':
        return euro;
      case 'USD':
        return dollar;
      case 'GBP':
        return gbp;
      case 'JPY':
        return jpy;
      case 'CHF':
        return chf;
      case 'NOK':
        return nok;
      case 'AUD':
        return aud;
      case 'CAD':
        return cad;
      case 'NZD':
        return nzd;
      default:
        return '';
    }
  };

  const symbol1Source = getSymbol1();
  const symbol2Source = getSymbol2();

  console.log(pair1, pair2);
  return (
        <div className="pair">
            <div className='pair-symbol'>
                <img src={symbol1Source} className='symbol' width='50px' height='50px' />
                <span className='separator'>vs</span>
                <img src={symbol2Source} className='symbol' width='50px' height='50px' />
            </div>
            <div className='pair-info-wrap'>
                <p className='pair-info'>{props.pair.ticker}</p>
                <p className='pair-info'>{props.pair.bid}</p>
            </div>
        </div>
  );
};

export default Pair;