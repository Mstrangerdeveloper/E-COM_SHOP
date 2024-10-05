import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductlist } from './ProductlistApi';

const initialState = {
  products: [],  // Changed from value to products
  status: 'idle',
};

// Async thunk to fetch the product list
export const fetchProductsAsync = createAsyncThunk(
  'productlist/fetchProducts',  // Changed the action name
  async (amount) => {
    const response = await fetchProductlist(amount);
    return response.data; // The payload is now the product list
  }
);

export const ProductlistSlice = createSlice({
  name: 'Productlist',
  initialState,
  reducers: {
    increment: (state) => {
      state.products.push({ id: state.products.length + 1, name: `Product ${state.products.length + 1}` });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;  // Save the product list to the state
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment } = ProductlistSlice.actions;

export const selectProducts = (state) => state.Productlist.products;  // Correct selector

export default ProductlistSlice.reducer;
