import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(api);
    const data = await response.data;
    return data;
  }
)


export const productsSlice = createSlice({
  name: "products",
  initialState,
  // The reducers field lets us define reducers and generate associate actions
  // This is where direct logic goes
  reducers: {


  },

  // The extraReducers filed lets the slice handler action defined elsewhere

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products = [];
      })
  }

})

export default productsSlice.reducer;