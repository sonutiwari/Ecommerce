import { createSelector } from "reselect";
const userInputSelector = (state) => state.user;
export const selectCurrentUser = createSelector(
  [userInputSelector],
  (user) => user.currentUser
);
