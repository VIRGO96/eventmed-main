import Repository from "./Repository";
const EVENT = "/event";
const MY_EVENTS = "/event/my-events";
export default {
  
  getEvent(payload) {
    return Repository.get(`${EVENT}`);
  },
  addEvent(payload) {
    // console.log('payload', payload);
    return Repository.post(`${EVENT}`, payload);
  },
  myEvent(payload) {
    return Repository.get(`${MY_EVENTS}`);
  }
};
