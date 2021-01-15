
const mutations = {
  FETCH_EMPLOYEES(state, data){
    state.employees = data
  },

  DELETE_EMPLOYE(state, employeeId){
    let employees = [...state.employees.filter( employee => employee.id != employeeId)];
    state.employees = employees;
  },
  ADD_EMPLOYE(state, newEmployee){
    let employees = [...state.employees];
    employees.push(newEmployee);
    state.employees = employees;
  },
  UPDATE_EMPLOYEE(state, employeeUpdated){
    let employees = [...state.employees];
    const index = employees.findIndex( e => e.id === employeeUpdated.id); 
    employees[index] = employeeUpdated;

    state.employees = employees; 
  },
}

export default mutations;