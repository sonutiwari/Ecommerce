import CartActiontypes from "./cart.action.types";
import { addItemToCart } from "./cart.utils";
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
    default:
      return state;
  }
};

export default cartReducer;
