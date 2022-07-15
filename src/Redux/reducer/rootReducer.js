import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import favouriteReducer from "./favouriteReducer";


let appReducer = combineReducers({
	event: eventReducer,
	favourite: favouriteReducer,
});
const rootReducer = (state, action) => {
	console.log(action.type);
	if (action.type === 'SIGN_OUT') {
		return appReducer(undefined, action);
	}
	return appReducer(state, action);
};

export default rootReducer;