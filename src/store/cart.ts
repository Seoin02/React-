import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItems {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  readonly items: ICartItems[];
  totalAmount: number;
}

const initialState: ICartState = {
  items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItems>) {
      console.log("Action dispatched:", action.payload);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.count += newItem.count;
      } else {
        state.items.push(newItem);
      }
      console.log("Before updating totalAmount");
      state.totalAmount += newItem.price * newItem.count;
      console.log("Updated cart state:", state);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.count;
        state.items = state.items.filter((item) => item.id !== id);

        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;

      localStorage.setItem("cartItems", JSON.stringify([]));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
