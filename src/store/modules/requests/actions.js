// Old export that works with local database
// export default { 
//   contactCoach(context, payload) { // this action works similar to registerCoach action from coaches module
//     const newRequest = {
//       id: new Date().toISOString(), // creates unique id based on current date
//       coachId: payload.coachId,
//       userEmail: payload.email,
//       message: payload.message
//     };
//     context.commit('addRequest', newRequest);
//   }
// };



//new export that uses firebase
// Lesson 255
export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(`https://find-a-coach-3c96d-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`https://find-a-coach-3c96d-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};