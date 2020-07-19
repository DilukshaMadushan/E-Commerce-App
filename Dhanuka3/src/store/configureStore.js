import {createStore,combineReducers} from 'redux';

import cartItems from './cartItemRedux';
import counterWishlist from './wishlistRedux';
//import signIn from './signInRedux';

const rootReducer = combineReducers({
    cartItems : cartItems,
    wishList:counterWishlist,
    //signIn:signIn,

});

const configureStore = () =>{
    return createStore(rootReducer);
};


export default configureStore;