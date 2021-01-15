
import employeesMutations from './employeesMutations';
import employeesActions from './employeesActions';

const employees = {
  namespaced : true,
  state: {
    employees : []
  },
  mutations: employeesMutations,
  actions: employeesActions,

  getters: {
    
  }
}

export default employees;