import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Dishes/Menu';
import ActionMainPage from './Actions/ActionMainPage';
import Colontitul from './Colontitul/Colontitul';
import { setCategory, setSortOption } from './Redux/filterSlice';

function Home({ category, sortOption }) {
  const dispatch = useDispatch();
  const { groupedDishes } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(setCategory(category));
  }, [category, dispatch]);

  useEffect(() => {
    if (sortOption) {
      dispatch(setSortOption(sortOption));
    }
  }, [sortOption, dispatch]);

  return (
    <div>
      <div className='cont'>
        <ActionMainPage />
      </div>
      <Menu groupedDishes={groupedDishes} />
      <Colontitul />
    </div>
  );
}

export default Home;
