import Home from '../features/home/Home';
import LoginPage from '../features/Login/LoginPage';
import PageUsers from '../features/users/components/PageUsers';

const publicRoutes = [
  { path: '/', component: Home, name: 'Home 1' },
  { path: '/login1', component: LoginPage, name: 'Login 1' },
  { path: '/users', component: PageUsers },
];

const privateRoutes = [{ path: 'home', component: Home }];

export { publicRoutes, privateRoutes };
