import Home from '../features/home/Home';
import LoginPage from '../features/Login/LoginPage';

const publicRoutes = [{ path: 'login', component: LoginPage }];

const privateRoutes = [{ path: 'home', component: Home }];

export { publicRoutes, privateRoutes };
