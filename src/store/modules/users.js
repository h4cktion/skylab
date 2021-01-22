
import usersMutations from './usersMutations';
import usersActions from './usersActions';

const users = {
  namespaced : true,
  state: {
    users : []
  },
  mutations: usersMutations,
  actions: usersActions,

  getters: {
    
  }
}

export default users;