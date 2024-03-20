import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      // alert("Product Added to Cart");
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.title;
      state.cart = state.cart.filter((item) => item.title !== itemIdToRemove);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
