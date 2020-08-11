import { createSelector } from "reselect";
export const cartInputSelector = (state) => state.cart;
export const cartItemsOutputSelector = createSelector(
  [cartInputSelector],
  (cart) => cart.cartItems
);

export const cartItemCountOutputSelector = createSelector(
  [cartItemsOutputSelector],
  (cartItems) => {
    let itemCount = 0;
    for (const cartItem of cartItems) {
      itemCount += cartItem.quantity;
    }
    return itemCount;
  }
);

export const showCartOutputSelector = createSelector(
  [cartInputSelector],
  (cart) => cart.showCart
);

export const selectCartTotal = createSelector(
  [cartItemsOutputSelector],
  (cartItems) => {
    let totalPrice = 0;
    for (const cartItem of cartItems) {
      totalPrice += cartItem.quantity * cartItem.price;
    }
    return totalPrice;
  }
);
