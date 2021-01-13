//import axios from 'axios';


const employees = {
  namespaced : true,
  state: {
    employees : []
  },
  mutations: {
    FETCH_EMPLOYEES(state, data){
      state.employees = data
    },

    DELETE_EMPLOYE(state, employeeId){
      let employees = state.employees.filter( employee => employee.id != employeeId)
      state.employees = employees;
    }
  },
  actions: {
    fetchEmployees ({commit}) {
      
      // Initialisation des data pour dev, parce que l'api me disait souvent que je faisait trop d'appel.
      const data = [ { 
        id:0,
        employee_name: "Tiger Nixon",
        employee_age: 61,
        employee_salary: 320800,
      },{
        id:1,
        employee_name: "Garrett Winters",
        employee_age: 63,
        employee_salary: 170750,
      },{
        id:2,
        employee_name: "Ashton Cox",
        employee_age: 66,
        employee_salary: 86000,
      },{
        id:3,
        employee_name: "Cedric Kelly",
        employee_age: 22,
        employee_salary: 433060 }
      ];
      commit('FETCH_EMPLOYEES', data)
     
      /*  axios
        .get('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => {
          console.log(res.data.data)
          commit('FETCH_EMPLOYEES', res.data.data)
        })
        .catch(err => console.error(`error when we try to fetch data:  ${err}`)) */
    },

    async deleteEmployee({commit}, employee){
      //call API to delete employee
      commit('DELETE_EMPLOYE', employee.id);
    }
  
  },

  getters: {
    
  }
}

export default employees;