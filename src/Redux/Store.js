import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
// import rootReducer from "../reducer/rootReducer";
import rootReducer from "./reducer/rootReducer";

const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // checkLocalStorage(),
  comp(applyMiddleware(thunk))
);

// store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
