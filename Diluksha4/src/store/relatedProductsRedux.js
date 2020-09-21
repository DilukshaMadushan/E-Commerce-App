export const addRelatedItemList = (item) => {
  return {
    type: "ADD_RELATED_ITEMLIST",
    payload: item,
  };
};

export const addHomeItemList2 = (item) => {
  return {
    type: "ADD_Home_ITEMLIST2",
    payload: item,
  };
};

const initialState = {
  itemList: [],
  homeItemList2:[]
};

function relatedProducts(state = initialState, action) {
  switch (action.type) {
    case "ADD_RELATED_ITEMLIST":
      const newState = { itemList: action.payload, homeItemList2: state.homeItemList2  };
      return newState;
    
    case "ADD_Home_ITEMLIST2":
      const newState2 = { itemList: state.itemList, homeItemList2: action.payload  };
      return newState2;
  }
  return state;
}

export default relatedProducts;

