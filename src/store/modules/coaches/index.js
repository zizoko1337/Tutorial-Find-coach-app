import mutations from './mutations.js';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true, // it helps with separating names of actions,getters etc. from different modules. So there will be no name conflicts.
  state() {
    return {
      coaches: [],
    };
  },
  mutations: mutations, // one 'mutations' would be enough because we import it with the same name
  actions,
  getters,
};
