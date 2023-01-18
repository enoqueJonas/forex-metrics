import React from 'react';
import './Search.css';

const Search = (props) => {
  const handleInputChange = (e) => {
    props.addHandleInputChange(e.target.value);
  };

  return (
        <div className="search">
            <input type='text' className="searchfield" placeholder='Search by name...' onChange={handleInputChange}/>
        </div>
  );
};

export default Search;