import CartActiontypes from "./cart.action.types";
export const toggleCartDropdown = () => ({
  type: CartActiontypes.TOGGLE_CART_DROPDOWN,
});
export const addItemInCart = (item) => ({
  type: CartActiontypes.ADD_ITEM_IN_CART,
  payload: item,
});
