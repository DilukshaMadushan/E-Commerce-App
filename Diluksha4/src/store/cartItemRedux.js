export const addcartItem = (product) => {
  return {
    type: 'ADD_CART_ITEM',
    payload: product,
  };
};

export const removecartItem = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  };
};

export const incrementCount = (product) => {
  return {
    type: 'INCREASE_COUNTER',
    payload: product,
  };
};

export const decrementCount = (product) => {
  return {
    type: 'DECREASE_COUNTER',
    payload: product,
  };
};

export const emptyCart = () => {
  return {
    type: 'EMPTY_CART',
  };
};

const initialState = {
  cartList: [],
  totalPrice: 0,
};

function cartItems(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      const num = state.cartList.filter(
        (cartItems) => cartItems.id == action.payload.id,
      ).length;
      if (num == 0) {
        const newState = {
          cartList: [...state.cartList, action.payload],
          totalPrice:
            state.totalPrice +
            parseFloat(action.payload.price) * action.payload.count,
        };
        return newState;
      } else {
        return state;
      }

    case 'REMOVE_FROM_CART':
      const newState1 = {
        cartList: state.cartList.filter(
          (item) => item.id !== action.payload.id,
        ),
        totalPrice:
          state.totalPrice -
          parseFloat(action.payload.price * action.payload.count),
      };
      action.payload.count = 1;
      return newState1;

    case 'INCREASE_COUNTER':
      const indexPlus = state.cartList.indexOf(action.payload);
      state.cartList[indexPlus].count = action.payload.count + 1;
      const newState2 = {
        cartList: [...state.cartList],
        totalPrice: state.totalPrice + parseFloat(action.payload.price),
      };
      return newState2;

    case 'DECREASE_COUNTER':
      const numm = action.payload.count;
      if (numm != 1) {
        const indexMinus = state.cartList.indexOf(action.payload);
        state.cartList[indexMinus].count = action.payload.count - 1;
        const newState3 = {
          cartList: [...state.cartList],
          totalPrice: state.totalPrice - parseFloat(action.payload.price),
        };
        return newState3;
      } else {
        return state;
      }
    case 'EMPTY_CART':
      return Object.assign({}, state, {
        cartList: [],
        totalPrice: 0,
      });
  }
  return state;
}

export default cartItems;
