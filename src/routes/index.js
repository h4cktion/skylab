import EmployeesList from '../components/EmployeesList.vue';
import Settings from '../components/Settings.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/employees', component: EmployeesList },
  { path: '/settings', component: Settings },
  { path: '/', component: Home },
];

export default routes;