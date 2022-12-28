import Home from '../features/home/Home';
import LoginPage from '../features/authen/Login/LoginPage';
import Register from '../features/authen/register/Register';
import ForgotPassword from '../features/authen/forgotPassword/ForgotPassword';
import Sample from '../components/common/confirmDialog/Sample';
import PageUsers from '../features/users/components/PageUsers';
import PageStaff from '../features/persons/staff/component/PageStaff';
import PageStudent from '../features/persons/students/component/PageStudent';
import PageCamera from '../features/camera/PageCamera';
import PageScope from '../features/users/scopes/PageScope';
import PageRoles from '../features/users/roles/PageScope';
import PageDevice from '../features/devices/component/PageDevice';

const publicRoutes = [
  { path: '/login', component: LoginPage },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/test', component: Sample },
];

const privateRoutes = [
  { path: 'home', component: Home },
  { path: '/users', component: PageUsers },
  { path: '/students', component: PageStaff },
  { path: '/staffs', component: PageStudent },
  { path: '/camera', component: PageCamera },
  { path: '/scopes', component: PageScope },
  { path: '/roles', component: PageRoles },
  { path: '/devices', component: PageDevice },
];

export { publicRoutes, privateRoutes };
