export default {
  addRequest(state, payload) { //this mutation works similar to registerCoach mutation from coaches module
    state.requests.push(payload);
  }
};