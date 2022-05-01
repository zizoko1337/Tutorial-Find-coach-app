export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) { // this getter checks if users is already a coach so it cant register again
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id === userId); //returns true if coach with 'userId' already exist
      }
}