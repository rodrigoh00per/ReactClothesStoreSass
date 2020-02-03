/* import { SHOP_DATA } from "./shop.data"; */
import ShopActionTypes from "./shop.types";

const INITAL_STATE = {
  collections: null /*  SHOP_DATA() */,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default shopReducer;
