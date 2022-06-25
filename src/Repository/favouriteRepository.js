import Repository from "./Repository";

const FAVOURITE = "/favourite";

export default {
  getFavourite(payload) {
    //  alert("Empty, getFavourite in favouriteRespository");
    return Repository.get(`${FAVOURITE}`);
  },
  addFavourite(payload) {
    console.log("payload , addFavourite", payload);
    return Repository.post(`${FAVOURITE}`, payload);
  },
  removeFavourite(payload) {
    console.log("payload, removeFavourite", payload);
    return Repository.delete(`${FAVOURITE}/${payload}`);
  }
};

