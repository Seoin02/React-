import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItems {
  id: number;
  title: string;
  price: number;
  count: number;
  image: string;
}

export interface ICartState {
  items: ICartItems[];
  totalAmount: number;
}

const initialState: ICartState = {
  items: [],
  totalAmount: 0,
};

// localStorage에서 카트 데이터를 불러오는 함수
const loadCartFromLocalStorage = (): ICartState => {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    try {
      const { items, totalAmount } = JSON.parse(savedCart);
      return {
        items: items || [],
        totalAmount: totalAmount || 0,
      };
    } catch (error) {
      console.error("Failed to parse cart data from localStorage", error);
      return initialState;
    }
  }
  return initialState;
};

const saveCartToLocalStorage = (state: ICartState) => {
  const cartData = {
    items: state.items,
    totalAmount: state.totalAmount,
  };
  localStorage.setItem("cartItems", JSON.stringify(cartData));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
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
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.count, 0);

      saveCartToLocalStorage(state);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.count;
        state.items = state.items.filter((item) => item.id !== id);

        saveCartToLocalStorage(state);
      }
    },
    increaseItemCount(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count += 1;
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.count, 0);
        saveCartToLocalStorage(state);
      }
    },
    decreaseItemCount(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count -= 1;
        if (existingItem.count <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.count, 0);
        saveCartToLocalStorage(state);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;

      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseItemCount, decreaseItemCount } = cartSlice.actions;
export default cartSlice.reducer;
