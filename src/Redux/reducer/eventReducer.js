const initialData = {
  events: [],
  getEventsLoader: false,
  myEvents: [],
  myEventsLoader: false
};

const eventReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_EVENT":
      return {
        ...state,
        events: action.payload,
      };
    case "GET_EVENT_LOADER":
      return {
        ...state,
        getEventsLoader: action.payload,
      };
    case "MY_EVENT":
      return {
        ...state,
        myEvents: action.payload,
      };
    case "MY_EVENTS_LOADER":
      return {
        ...state,
        myEventsLoader: action.payload,
      };

    default:
      return state;
  }
};
export default eventReducer;
