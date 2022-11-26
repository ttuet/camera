import Home from '../features/home/Home';
import LoginPage from '../features/authen/Login/LoginPage';
import Register from '../features/authen/register/Register';
import ForgotPassword from '../features/authen/forgotPassword/ForgotPassword';
import Sample from '../components/common/confirmDialog/Sample';
import PageUsers from '../features/users/components/PageUsers';

const publicRoutes = [
  { path: '*', component: LoginPage },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/test', component: Sample },
];

const privateRoutes = [
  { path: 'home', component: Home },
  { path: '/users', component: PageUsers },
];

export { publicRoutes, privateRoutes };
