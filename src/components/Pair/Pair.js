import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Pair.css';
import { pairClicked } from '../../redux/pairDetails/pairDetails';
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
  const getSymbol = (symbol) => {
    switch (symbol) {
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

  const dispatch = useDispatch();
  const symbol1Source = getSymbol(pair1);
  const symbol2Source = getSymbol(pair2);

  const handleOnclick = () => {
    const obj = { ...props.pair, symbol1Source, symbol2Source };
    dispatch(pairClicked(obj));
  };

  return (
    <NavLink to='/details' className="pair" onClick={handleOnclick}>
        <div className='pair-symbol'>
          <img src={symbol1Source} className='symbol' width='40px' height='40px' />
          <span className='separator'>vs</span>
          <img src={symbol2Source} className='symbol' width='40px' height='40px' />
        </div>
        <div className='pair-info-wrap'>
          <p className='pair-info'>{props.pair.ticker}</p>
          <p className='pair-info'>{props.pair.bid}</p>
        </div>
    </NavLink>
  );
};

export default Pair;