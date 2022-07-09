import Index from '../pages/Index';
import Container from '../pages/Container';
import Bankcard from '../pages/Bankcard';

export default [
  { name: 'index', path: '/', component: Index },
  { name: 'json to querystring', path: '/json2querystring', component: Container },
  { name: 'bankcard', path: '/bankcard', component: Bankcard }
];
