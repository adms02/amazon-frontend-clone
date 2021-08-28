import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
  subtotal: 0.0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    /**
     * Adds item to basket
     * Check if item exists in state
     * If not exist add item
     * If exist increase qty
     */
    addToBasket: (state, action) => {
      const product = action.payload;

      product.price = Number(product.price);
      product.quantity = Number(product.quantity);

      const index = state.items.findIndex((x) => x.id === product.id);

      if (index === -1) {
        state.items.push(product);
      } else {
        state.items[index].quantity += product.quantity;
      }

      const quantity = product.quantity;
      const price = product.price.toFixed(2);

      state.quantity = state.quantity + quantity;
      state.subtotal += price * quantity;
    },

    /**
     * Remove item from basket
     */
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((x) => x.id === action.payload);
      let newBasket = [...state.items];

      const price = state.items[index].price;
      const quantity = state.items[index].quantity;

      if (index >= 0) {
        newBasket.splice(index, 1);

        state.quantity -= quantity;
        state.subtotal -= price;
      } else {
        console.warn(`Cant remove product (id: ${action.payload}) as its not in basket!`);
      }

      state.items = newBasket;
    },

    /**
     * Remove all items from basket
     */
    emptyBasketHandler: (state, action) => {
      Object.assign(state, initialState);
    },

    /**
     * Update item quantity
     * Takes in Product ID and new quantity
     */
    updateQuantity: (state, action) => {
      const index = state.items.findIndex((x) => x.id === action.payload.id);
      const product = state.items[index];
      const quantity = Number(action.payload.quantity);

      if (quantity <= 0) {
        state.quantity -= product.quantity;
        state.subtotal -= product.price * product.quantity;

        state.items.splice(index, 1);
      } else {
        if (quantity < product.quantity) {
          const diff = product.quantity - quantity;

          state.quantity -= diff;
          state.subtotal -= product.price * diff;
        } else {
          const diff = Math.abs(quantity - product.quantity);

          state.quantity += diff;
          state.subtotal += product.price * diff;
        }

        if (state.subtotal < 0) {
          state.subtotal = 0.0;
        }

        product.quantity = quantity;
      }
    },
  },
});

export const { addToBasket, removeFromBasket, updateQuantity } = basketSlice.actions;

export const { emptyBasketHandler } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectQuantity = (state) => state.basket.quantity;
export const selectSubtotal = (state) => state.basket.subtotal;

export default basketSlice.reducer;
