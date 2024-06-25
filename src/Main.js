// Main.js

import React, { useState, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Delivery from './Delivery';
import CartDish from './CartDish';
import Search from './Search';
import Order from './Order';
import Action from './Action';
import CartAction from './CartAction';
import Sorting from './Sorting';
import Navbar from './Navbar';
import { OrderContext } from './OrderContext';

const Main = () => {
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('none');
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    navigate('/');
    console.log('Category set to:', newCategory);
  };

  const handleCartClick = (e) => {
    if (order.length === 0) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Navbar 
        handleCategoryChange={handleCategoryChange} 
        handleCartClick={handleCartClick} 
        order={order} 
      />
      <Routes>
        <Route
          path='/'
          element={<Home category={category} sortOption={sortOption} />}
        />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/cartdish/:title' element={<CartDish />} />
        <Route path='/search' element={<Search />} />
        <Route path='/order' element={<Order />} />
        <Route path='/action' element={<Action />} />
        <Route path='/cartaction/:titleac' element={<CartAction />} />
        <Route
          path='/sorting'
          element={<Sorting sortOption={sortOption} setSortOption={setSortOption} />}
        />
      </Routes>
    </>
  );
};

export default Main;
