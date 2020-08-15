import userActionTypes from "./user.action.types";
const userReducer = (state = { currentUser: null }, action) => {
  console.log(action.payload);
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
