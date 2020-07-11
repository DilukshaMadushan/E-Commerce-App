
export const addcartItem = (product) => {
    return {
        type: 'ADD_CART_ITEM',
        payload:product,
    }
  }
  
export const removecartItem = (product) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload:product,
    }
  }

export const incrementCount = (product) => {
    return {
      type: 'INCREASE_COUNTER',
      payload: product
    }
  }
  
export const decrementCount = (product) => {
    return {
      type: 'DECREASE_COUNTER',
      payload: product
    }
  }  


function cartItems (state = [] ,action){
    
    switch(action.type){
        case 'ADD_CART_ITEM':
          const num = state.filter(cartItems => cartItems.id == action.payload.id).length;
          if(num==0){
            return[
                ...state,
                action.payload
            ]
          }
        case 'REMOVE_FROM_CART':
            return state.filter(cartItems => cartItems.id !== action.payload.id)
            
        case 'INCREASE_COUNTER':
          const indexPlus = state.indexOf(action.payload);
          state[indexPlus].count = action.payload.count+1;
            return[
              ...state
            ]

        case 'DECREASE_COUNTER':
          const numm = action.payload.count;
          if(numm!=1){
            const indexMinus = state.indexOf(action.payload);
            state[indexMinus].count = action.payload.count-1;
            return[
              ...state
            ]
          }
    }
    return state;
}


export default cartItems;
