import Home from '../features/home/Home';
import LoginPage from '../features/Login/LoginPage';
import PageUsers from '../features/users/components/PageUsers';
import Register from '../features/register/Register';
import ForgotPassword from '../features/forgotPassword/ForgotPassword';

const publicRoutes = [
  { path: '/', component: LoginPage },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
];

const privateRoutes = [{ path: 'home', component: Home }];

export { publicRoutes, privateRoutes };
