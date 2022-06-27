const initialData = {
  favourites: [],
  myFavouriteLoader: false,
};
const favouriteReducer = (state = initialData, action) => {
    switch (action.type) {
      case "GET_FAVOURITE":
        return {
          ...state,
          favourites: action.payload,
        };
      case "REMOVE_FAVOURITE":
        return {
          ...state,
          favourites: action.payload,
        };
      case "MY_FAVOURITE_LOADER":
        return {
          ...state,
          myFavouriteLoader: action.payload,
        };

      default:
        return state;
    }
};
export default favouriteReducer;