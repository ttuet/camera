import Home from '../features/home/Home';
import LoginPage from '../features/Login/LoginPage';

const publicRoutes = [
  { path: '/', component: Home, name: 'Home 1' },
  { path: 'login1', component: LoginPage, name: 'Login 1' },
  { path: 'home', component: Home, name: 'HOme2' },
];

const privateRoutes = [{ path: 'home', component: Home }];

export { publicRoutes, privateRoutes };
