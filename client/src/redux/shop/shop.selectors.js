import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// the method that i used "hashtable" because you specific the key of the value that
// you need to retrieve

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionIsLoaded = createSelector(
  [selectCollections],
  collections => !!collections
);
