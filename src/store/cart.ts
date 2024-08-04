import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CART_ITEM } from "../constants/category";

export interface ICartInfo {
  readonly id: number;
  readonly count: number;
}

export interface ICartItems {
  readonly id: string;
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
  items: [],
  totalAmount: 0,
};

/**
 * 카트의 상태는 localStorage 기준으로 초기화 됩니다.
 * 카트의 상태는 새로고침해도 유지되어야 하기 때문입니다.
 */
// export const cartState = atom<ICartState>({
//   key: "cart",
//   default: {},
//   effects: [
//     ({ setSelf, onSet }) => {
//       localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
//       onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
//     },
//   ],
// });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItems>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.count += newItem.count;
      } else {
        state.items.push(newItem);
      }
      state.totalAmount += newItem.price * newItem.count;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.count;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

/**
 * cartList를 구현 하세요.
 * id, image, count 등을 return합니다.
 */

// addToCart는 구현 해보세요.

// removeFromCart는 참고 하세요.
// export const removeFromCart = (cart: ICartState, id: string) => {
//   const tempCart = { ...cart };
//   if (tempCart[id].count === 1) {
//     delete tempCart[id];
//     return tempCart;
//   } else {
//     return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
//   }
// };

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
