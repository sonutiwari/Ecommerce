import CartActiontypes from "./cart.action.types";
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantity,
} from "./cart.utils";

const cartReducer = (state = { showCart: false, cartItems: [] }, action) => {
  switch (action.type) {
    case CartActiontypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCart: !state.showCart,
      };

    case CartActiontypes.ADD_ITEM_IN_CART:
      if (!action.payload) return state;
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActiontypes.REMOVE_ITEM_FROM_CART:
      if (!action.payload) return state;
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CartActiontypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
