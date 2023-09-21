export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => Number(item.price) + amount, 0);
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET__USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_FROM_BASKET":
      const ItemId = action.payload;
      console.log(ItemId);
      const newArray = state.basket.filter((item, index) => {
        return item.id !== ItemId;
      });
      console.log(newArray);
      return { ...state, basket: newArray };

    default:
      return state;
  }
}

export default reducer;
