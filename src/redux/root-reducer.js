import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  //storage is the default storage in this case is localStorage
  storage,
  //The whitelist is the key that we want to persist in our application and up to the root reducer
  whitelist: ["cart"]
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

export default persistReducer(persistConfig, rootReducer);
