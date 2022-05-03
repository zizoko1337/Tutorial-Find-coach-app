export default {
  contactCoach(context, payload) { // this action works similar to registerCoach action from coaches module
    const newRequest = {
      id: new Date().toISOString(), // creates unique id based on current date
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    context.commit('addRequest', newRequest);
  }
};