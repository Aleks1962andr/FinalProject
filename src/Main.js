import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';
import Delivery from './Delivery/Delivery';
import CartDish from './Dishes/CartDish';
import Search from './Search/Search';
import Order from './Order/Order';
import Action from './Actions/Action';
import CartAction from './Actions/CartAction';
import Sorting from './Sorting/Sorting';
import Navbar from './Navbar';

const Main = () => {
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('none');
  const order = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    navigate('/');
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
