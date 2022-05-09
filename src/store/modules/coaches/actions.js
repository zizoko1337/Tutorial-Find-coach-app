export default {
    async registerCoach(context, data) { // async + await instead of .then (lesson 251)
        // example data we get from coachRegistration
        // first: Jan,
        // last: Smith,
        // desc: Im Jan and i teach coding,
        // rate: 10,
        // areas: ['frontend','backend],
      const userId = context.rootGetters.userId; //for fetching to database we want id to be stored in separated variable
      const coachData = { 
        // data gets formatted so it will be the same as other coaches, and it could be used in registerCoach mutation
        // id: context.rootGetters.userId, //gets id fom main index.js (src\store\index.js)
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };

      const response = await fetch(`https://find-a-coach-3c96d-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, { //adding coach to server
        method: 'PUT', // overwrites data if it exist or creates new if it didn't
        //POST will add new entry all the time
        body: JSON.stringify(coachData)
      });
  
      // const responseData = await response.json();
  
      if (!response.ok) {
        // error ...
      }
  
      context.commit('registerCoach', { //adding coach to vuex
        ...coachData,
        id: userId //id is added separately because in case of firebase we send id inside url
      });

      //----------old code block for reference (before firebase)---------
      //committing = using method registerCoach with coachData parameter.
      //context.commit('registerCoach', coachData); 
      // registerCoach(state, payload = coachData) {}
    },

    async loadCoaches(context) {
      const response = await fetch(
        `https://find-a-coach-3c96d-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
      );
      const responseData = await response.json();
  
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }
  
      const coaches = []; // array with all coaches
  
      for (const key in responseData) {
        const coach = {
          //objects in firebase are named by id (key) and inside key there is the rest of data
          //thats why id: key, and others look like firstName: responseData[key].firstName,
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas
        };
        coaches.push(coach);
      }
  
      context.commit('setCoaches', coaches);
    }
  };