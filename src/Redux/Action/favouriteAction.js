// import { RepositoryFactory } from "../../../Repository/RepositoryFactories";
import { RepositoryFactory } from "../../Repository/RepositoryFactories";

let favouriteRepository = RepositoryFactory.get("favourite");

// Create Action
export const createFavourite =
  (payload, onSuccess = () => {}) =>
  async (dispatch) => {
    try {
      let { data } = await favouriteRepository.addFavourite(payload);
      if (data.success) {
        // alert("Favourite Added successfuly");
        dispatch(getFavourite());
        onSuccess();
      }
    } catch (err) {
      console.log("error", err.message);
    }
  };

//Get Action

export const getFavourite = (payload) => async (dispatch) => {
  dispatch(myFavouriteLoader(true));
  try {
    let { data } = await favouriteRepository.getFavourite(payload);
    // console.log("favourite best seeleer ddata", data);
    if (data.success) {
      dispatch({
        type: "GET_FAVOURITE",
        payload: data.data,
      });
      dispatch(myFavouriteLoader(false));
    }
  } catch (err) {
    console.log("error", err.message);
    dispatch(myFavouriteLoader(false));
  }
};

//Remove Action
export const removeFavourite = (payload) => async (dispatch) => {
  try {
    let { data } = await favouriteRepository.removeFavourite(payload);
    console.log("favourite removeFavourite /FavouriteAction", data);
    if (data.success) {
      dispatch(getFavourite());
    }
  } catch (err) {
    alert(err.message);
  }
};

//my favourite loader
export const myFavouriteLoader = (val) => async (dispatch) => {
  dispatch({
    type: "MY_FAVOURITE_LOADER",
    payload: val,
  });
};
