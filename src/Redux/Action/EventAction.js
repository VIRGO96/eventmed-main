
import { RepositoryFactory } from "../../Repository/RepositoryFactories";
let eventRepository = RepositoryFactory.get("event");

// Users Loader
export const getEventsLoader = (val) => async (dispatch) => {
  dispatch({
    type: "GET_EVENT_LOADER",
    payload: val,
  });
};

//My Events
export const myEventsLoader =(val) => async (dispatch) => {
  dispatch({
    type: "MY_EVENTS_LOADER",
    payload:val,
  })
}

// Create Action
export const createEvent =
  (payload, onSuccess = () => {}) =>
    async (dispatch) => {
    dispatch(myEventCreationLoader(true));
    try {
      let { data } = await eventRepository.addEvent(payload);
      if (data.success) {
        alert("Event Added successfuly");
        onSuccess();
        dispatch(myEventCreationLoader(false));
      }
    } catch (err) {
      dispatch(myEventCreationLoader(false));
      console.log("error", err.message);
    }
  };

// GET Action

export const getEvent = (payload) => async (dispatch) => {
  dispatch(getEventsLoader(true));
  try {
    let { data } = await eventRepository.getEvent(payload);
    // console.log("action best seeleer ddata", data);
    if (data.success) {
      dispatch({
        type: "GET_EVENT",
        payload: data.data,
      });
      dispatch(getEventsLoader(false));
    }
  } catch (err) {
    console.log("error", err.message);
    dispatch(getEventsLoader(false));
  }
};



//mY event


export const getMyEvent = payload => async dispatch => {
	dispatch(myEventsLoader(true));
	try {
		let { data } = await eventRepository.myEvent(payload);
		// console.log("action best seeleer ddata", data);
		if (data.success) {
			dispatch({
				type: 'MY_EVENT',
				payload: data.data,
			});
			dispatch(myEventsLoader(false));
		}
	} catch (err) {
		console.log('error', err.message);
		dispatch(myEventsLoader(false));
	}
};

// Event creation form Loader
export const myEventCreationLoader = (val) => async (dispatch) => {
  dispatch({
    type: "MY_EVENTCREATION_LOADER",
    payload:val,
  })
}
