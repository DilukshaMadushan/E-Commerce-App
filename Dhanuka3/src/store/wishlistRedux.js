export const addwishItem = (item) => {
  item.wishlistState = true;
  return {
    type: "ADD_WISHLIST_ITEM",
    wishList: item,
  };
};

export const removewishItem = (item) => {
  item.wishlistState = false;
  return {
    type: "REMOVE_WISHLIST_ITEM",
    wishList: item,
  };
};

const initialState = {
  wishlist: [],
};

function counterWishlist(state = initialState, action) {
  switch (action.type) {
    case "ADD_WISHLIST_ITEM":
      const num = state.wishlist.filter(
        (Items) => Items.id == action.wishList.id
      ).length;
      if (num == 0) {
        const newState = { wishlist: [...state.wishlist, action.wishList] };
        return newState;
      } else {
        return state;
      }
    case "REMOVE_WISHLIST_ITEM":
      const newState1 = {
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.wishList.id
        ),
      };
      return newState1;
  }
  return state;
}

export default counterWishlist;
