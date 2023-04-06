import { createSlice } from "@reduxjs/toolkit";

const initcart = {
  changed:false,
  items: [],
  totalQuantity: 0,
  totalAmount:0
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initcart,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemCart(state, action) {
      state.changed=true;
       console.log(state.items);
      const newItem = action.payload;
      // console.log(newItem);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      //state.totalAmount=state.totalAmount+newItem.price*existingItem.quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
        state.totalAmount=state.totalAmount+newItem.price
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalAmount=state.totalAmount+existingItem.price
      }
    },
    removeItemCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed=true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount=state.totalAmount-existingItem.price
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalAmount=state.totalAmount-existingItem.price
      }
    },
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice;
