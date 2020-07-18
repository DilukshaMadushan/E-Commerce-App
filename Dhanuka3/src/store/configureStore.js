import {createStore,combineReducers} from 'redux';

import cartItems from './cartItemRedux';
import counterWishlist from './wishlistRedux';

const rootReducer = combineReducers({
    cartItems : cartItems,
    wishList:counterWishlist,

});

const configureStore = () =>{
    return createStore(rootReducer);
};


export default configureStore;