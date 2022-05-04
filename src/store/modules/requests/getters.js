export default {
    requests(state, _, _2, rootGetters) { //(state, getters, rootState, rootGetters) 
      const coachId = rootGetters.userId; 
      return state.requests.filter(req => req.coachId === coachId);//getting requests by user id
    },
    hasRequests(_, getters) { //(state, getters)
        return getters.requests && getters.requests.length > 0; // wee need to get length but of filtered requests 
      }
    };