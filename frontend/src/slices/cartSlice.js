import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utills/cartUtills";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((c) => c._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((c) =>
          c._id === existItem._id ? item : c
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((c) => c._id !== action.payload);

      return updateCart(state);
    },
    resetCart: (state) => (state = initialState),
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
