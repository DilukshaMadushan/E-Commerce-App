import { createStore, combineReducers } from "redux";
import cartItems from "./cartItemRedux";
import counterWishlist from "./wishlistRedux";
import auth from "./authRedux";
import relatedProducts from "./relatedProductsRedux";

const rootReducer = combineReducers({
  cartItems: cartItems,
  wishList: counterWishlist,
  auth: auth,
  relatedProducts: relatedProducts,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
