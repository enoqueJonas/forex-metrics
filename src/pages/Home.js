import React, { useState, useEffect } from 'react';
import PairList from '../components/PairList/PairList';
import Search from '../components/Search/Search';

const Home = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (inp = '') => {
    setInput(inp);
  };

  useEffect(() => {
  }, [input]);

  return (
                <div>
                        <Search addHandleInputChange={handleInputChange} />
                        <PairList input={input}/>
                </div>
  );
};

export default Home;