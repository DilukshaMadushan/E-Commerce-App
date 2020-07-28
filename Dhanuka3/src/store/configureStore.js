import {createStore,combineReducers} from 'redux';
import cartItems from './cartItemRedux';
import counterWishlist from './wishlistRedux';
import Auth from './AuthRedux';

const rootReducer = combineReducers({
    cartItems : cartItems,
    wishList:counterWishlist,
    Auth:Auth,

});

const configureStore = () =>{
    return createStore(rootReducer);
};


export default configureStore;