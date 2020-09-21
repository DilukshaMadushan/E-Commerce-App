export const addCategoryList = (item) => {
    return {
      type: "ADD_CATEGORY_LIST",
      payload: item,
    };
};
  
const initialState = {
    categoryList: [],
};
  
function categoryListRedux(state = initialState, action) {
    switch (action.type) {
        case "ADD_CATEGORY_LIST":
            console.log("Fuck ",action.payload);
            const newState = { categoryList: action.payload };
            return newState;
    }
    return state;
}

export default categoryListRedux;

