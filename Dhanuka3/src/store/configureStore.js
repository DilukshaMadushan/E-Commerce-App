import {createStore,combineReducers} from 'redux';

import cartItems from './cartItemRedux';
import counterWishlist from './wishlistRedux';
import signInid from './signInRedux';

const rootReducer = combineReducers({
    cartItems : cartItems,
    wishList:counterWishlist,
    signInid:signInid,

});

const configureStore = () =>{
    return createStore(rootReducer);
};


export default configureStore;