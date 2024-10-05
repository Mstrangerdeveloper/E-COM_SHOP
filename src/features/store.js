// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import ProductlistReducer from './Product-list/ProductlistSlice'; // Import the correct reducer

export const store = configureStore({
  reducer: {
    Productlist: ProductlistReducer,
     // Correctly reference the reducer
  },
});
