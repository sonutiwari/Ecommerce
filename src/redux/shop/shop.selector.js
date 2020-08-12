import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 11,
  jackets: 20,
  womens: 26,
  mens: 35,
};

const shopStateSelect = (state) => state.shop;

const shopSelector = createSelector(
  [shopStateSelect],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([shopStateSelect], ({ collections }) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);

export default shopSelector;
