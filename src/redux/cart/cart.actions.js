import { CartActionTypes } from "./cart.types";

export const toogleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN
});

export const addItem = item => {
  return { type: CartActionTypes.ADD_ITEM, payload: item };
};
