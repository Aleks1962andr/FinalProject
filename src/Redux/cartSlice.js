import { createSlice } from '@reduxjs/toolkit'

 const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToOrder: (state, action) => {
      const existingDish = state.cartItems.find(item => item.id === action.payload.id);
      if (existingDish) {
        existingDish.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    removeFromOrder: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateOrder: (state, action) => {
      const { id, updateFunc } = action.payload;
      const dish = state.cartItems.find(item => item.id === id);
      if (dish) {
        dish.quantity = updateFunc(dish.quantity);
      }
    },
  },
})

export const { addToOrder, removeFromOrder, updateOrder } = cartSlice.actions;
export default cartSlice.reducer;
