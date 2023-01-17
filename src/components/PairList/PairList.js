import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pair from '../Pair/Pair';
import './PairList.css';
import getPairs from '../../redux/pair/pair-api';

const PairList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPairs());
  }, []);
  const pairs = useSelector((state) => state);
  console.log(pairs[0]);
  return (
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
};

export default PairList;