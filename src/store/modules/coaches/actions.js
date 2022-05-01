export default {
    registerCoach(context, data) {
        // example data we get from coachRegistration
        // first: Jan,
        // last: Smith,
        // desc: Im Jan and i teach coding,
        // rate: 10,
        // areas: ['frontend','backend],
      const coachData = { 
        // data gets formatted so it will be the same as other coaches, and it could be used in registerCoach mutation
        id: context.rootGetters.userId, //gets id fom main index.js (src\store\index.js)
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };
      //committing = using method registerCoach with coachData parameter.
      context.commit('registerCoach', coachData); 
      // registerCoach(state, payload = coachData) {}
    }
  };