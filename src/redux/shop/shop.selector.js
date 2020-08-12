import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shopStateSelect = (state) => state.shop;

const shopSelector = createSelector(
  [shopStateSelect],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [shopStateSelect],
    ({ collections }) => collections[collectionUrlParam]
  )
);

export default shopSelector;
