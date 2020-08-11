import CartActiontypes from "./cart.action.types";

export const toggleCartDropdown = () => ({
  type: CartActiontypes.TOGGLE_CART_DROPDOWN,
});

export const addItemInCart = (item) => ({
  type: CartActiontypes.ADD_ITEM_IN_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActiontypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const decreaseItemQuantity = (item) => ({
  type: CartActiontypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});
