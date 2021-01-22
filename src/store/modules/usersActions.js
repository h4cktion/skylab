//import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid';

const actions = {
  fetchUsers ({commit}) {
    
    const data = [ 
      { 
        id:0,
        name: "Matthieu",
        lastName: "Wandolski",
        mail: "matthieu.wandolski@gmail.com",
        password: "Matthieu",
        isAdmin: true,
      },
      { 
        id:1,
        name: "Sylvain",
        lastName: "Dupont",
        mail: "sdu@skylab-x.io",
        password: "Sylvain",
        isAdmin: false,
      },

    ];
    commit('FETCH_USERS', data)
   
    /*  axios
      .get('http://localhost:8080/')
      .then(res => {
        commit('FETCH_EMPLOYEES', res.data.data)
      })
      .catch(err => console.error(`error when we try to fetch data:  ${err}`)) */
  },

  async deleteUser({commit}, user){
    //TODO call API to delete user
    commit('DELETE_USER', user.id);
  },

/*   async updateUser({commit}, user){
     if(user.id){
      axios
        .put(`http://localhost:8080/api/v1/update/${user.id}`, user)
        .then(res => {
          commit('UPDATE_USER', res.data.data)
        })
        .catch(err => console.error(`error when we try to uptade employe:  ${err}`))
    }else{
      //TODO call API to add user
      user.id = uuidv4();
      commit('ADD_USER', user);
    } 
  }, */

};

export default actions;