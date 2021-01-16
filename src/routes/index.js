import EmployeesList from '../components/EmployeesList.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/employees', component: EmployeesList },
  { path: '/', component: Home },
];

export default routes;