import {createStore,combineReducers} from 'redux';

import cartItems from './cartItemRedux';
import counterChange from './counterItemRedux';

const rootReducer = combineReducers({
    cartItems : cartItems,
    //counter:counterChange,

});

const configureStore = () =>{
    return createStore(rootReducer);
};


export default configureStore;