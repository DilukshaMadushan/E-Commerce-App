export const addRelatedItemList = (item) => {
  return {
    type: "ADD_RELATED_ITEMLIST",
    payload: item,
  };
};

const initialState = {
  itemList: [],
};

function relatedProducts(state = initialState, action) {
  switch (action.type) {
    case "ADD_RELATED_ITEMLIST":
      const newState = { itemList: action.payload };
      return newState;
  }
  return state;
}

export default relatedProducts;
