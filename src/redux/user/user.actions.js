import { SET_CURRENT_USER } from "../../shared/constants";
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
