import { createSlice } from '@reduxjs/toolkit';
import { data } from '../Data';

const groupBy = (items, key) => {
  return items.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};

const initialState = {
  category: '',
  sortOption: '',
  filteredDishes: data,
  groupedDishes: groupBy(data, 'name'),
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      let filtered = data;
      if (action.payload && action.payload !== '') {
        filtered = data.filter(d => d.name === action.payload);
      }
      state.filteredDishes = filtered;
      state.groupedDishes = groupBy(filtered, 'name');
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
      let sorted = [...state.filteredDishes];
      if (action.payload === 'desc') {
        sorted.sort((a, b) => b.price - a.price);
      } else if (action.payload === 'asc') {
        sorted.sort((a, b) => a.price - b.price);
      }
      state.filteredDishes = sorted;
      state.groupedDishes = groupBy(sorted, 'name');
    },
  },
});

export const { setCategory, setSortOption } = filterSlice.actions;
export default filterSlice.reducer;
