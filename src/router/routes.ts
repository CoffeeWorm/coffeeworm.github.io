import Index from '../pages/Index';
import Container from '../pages/Container';
import Bankcard from '../pages/Bankcard';

export default [
  { name: 'index', path: '/', component: Index },
  { name: 'JSON and Querystring Transfer', path: '/json2querystring', component: Container },
  { name: 'Bankcard Generator', path: '/bankcard', component: Bankcard }
];
