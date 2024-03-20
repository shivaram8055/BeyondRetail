import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = { ...action.payload, id: uuidv4() }; // Add a unique ID
      state.cart.push(newItem);
      // alert("Product Added to Cart");
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
