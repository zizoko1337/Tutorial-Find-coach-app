export default {
    registerCoach(state, payload) { // pushes coach object to coaches array
      state.coaches.push(payload);//payload = parameter coachData from actions where it gets formatted so it can be used
    },
    setCoaches(state, payload) { //setting coaches from action that fetches them from database
      state.coaches = payload;
    }
  };