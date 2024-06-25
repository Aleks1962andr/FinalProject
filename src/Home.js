import React, { useState, useEffect } from 'react';
import { data } from './Data';
import Menu from './Menu';
import PageTwo from './PageTwo';
import Colontitul from './Colontitul';

function Home({ category, sortOption }) {
  const [dish, setDish] = useState(data);
  const [filteredDishes, setFilteredDishes] = useState(data);

  useEffect(() => {
    if (category) {
      const filtered = dish.filter(d => d.name === category);
      setFilteredDishes(filtered);
    } else {
      setFilteredDishes(dish);
    }
  }, [category, dish]);

  useEffect(() => {
    if (sortOption === 'desc') {
      setFilteredDishes(prevDishes => [...prevDishes].sort((a, b) => b.price - a.price));
    } else if (sortOption === 'asc') {
      setFilteredDishes(prevDishes => [...prevDishes].sort((a, b) => a.price - b.price));
    } else {
      setFilteredDishes(dish);
    }
  }, [sortOption, dish]);

  return (
    <div>
      <div className='cont'>
        <PageTwo />
      </div>
      <Menu choice={filteredDishes} sortOption={sortOption} />
      <Colontitul />
    </div>
  );
}

export default Home;
