import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import favouriteReducer from "./favouriteReducer";


export let rootReducer = combineReducers({
  event: eventReducer,
  favourite: favouriteReducer
});
export default rootReducer;