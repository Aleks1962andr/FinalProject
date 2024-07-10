import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './sorting.css';

function Sorting({ sortOption, setSortOption }) {
  const [selectedSortOption, setSelectedSortOption] = useState(sortOption);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedSortOption(sortOption);
  }, [sortOption]);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSortOption(value);
    setSortOption(value);
    navigate('/');
  };

  return (
    <div className="blockSort">
      <div className='blockSortHeader'>
        <h2>Отсортировать блюда</h2>
      </div>

      <div className='blockSortPosition'>
        <div>
          <img src={require("./Assets/bezsort.png")} alt="icon" className="iconSort" />
        </div>
        <div>
          <label>без сортировки</label>
        </div>
        <div className='blokInputbut'>
          <input
            type="radio"
            name="sort"
            value="none"
            checked={selectedSortOption === 'none'}
            onChange={handleSortChange}
          />
        </div>
      </div>

      <div className='blockSortPosition'>
        <div>
          <img src={require("./Assets/bolsh.png")} alt="icon" className="iconSort" />
        </div>
        <div>
          <label>сначала дороже</label>
        </div>
        <div className='blokInputbut'>
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={selectedSortOption === 'desc'}
            onChange={handleSortChange}
          />
        </div>
      </div>

      <div className='blockSortPosition'>
        <div>
          <img src={require("./Assets/mensh.png")} alt="icon" className="iconSort" />
        </div>
        <div>
          <label>сначала дешевле</label>
        </div>
        <div className='blokInputbut'>
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={selectedSortOption === 'asc'}
            onChange={handleSortChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Sorting;
