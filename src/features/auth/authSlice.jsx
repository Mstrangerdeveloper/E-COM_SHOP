import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAuth } from './AuthApi';

const initialState = {
  products: [],  // Changed from value to products
  status: 'idle',
};

// Async thunk to fetch the product list
export const fetchAuthAsync = createAsyncThunk(
  'auth/fetchAuth',  // Changed the action name
  async (amount) => {
    const response = await fetchAuth(amount);
    return response.data; // The payload is now the product list
  }
);

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.products.push({ id: state.products.length + 1, name: `Product ${state.products.length + 1}` });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuthAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;  // Save the product list to the state
      })
      .addCase(fetchAuthAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment } = AuthSlice.actions;

export const selectProducts = (state) => state.Auth.products;  // Correct selector

export default AuthSlice.reducer;
