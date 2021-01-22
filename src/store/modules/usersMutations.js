
const mutations = {
  FETCH_USERS(state, data){
    state.users = data
  },

  DELETE_USER(state, userId){
    let users = [...state.users.filter( user => user.id != userId)];
    state.users = users;
  },
  ADD_USER(state, newuser){
    let users = [...state.users];
    users.push(newuser);
    state.users = users;
  },
  UPDATE_USER(state, userUpdated){
    let users = [...state.users];
    const index = users.findIndex( e => e.id === userUpdated.id); 
    users[index] = userUpdated;

    state.users = users; 
  },
}

export default mutations;