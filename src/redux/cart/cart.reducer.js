import CartActiontypes from "./cart.action.types";
const cartReducer = (state = { showCart: false }, action) => {
  switch (action.type) {
    case CartActiontypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
