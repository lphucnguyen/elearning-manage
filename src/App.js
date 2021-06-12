import Loading from './common/Loading/Loading';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import UserManage from './Components/layouts/admin/UserManage/UserManage';
import CourseManage from './Components/layouts/admin/CourseManage/CourseManage';
import Details from './pages/Details/Details';

import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate';
export const history = createBrowserHistory();

function App() {
  return (
    <Router history = {history}>
      <div className="App">
        <Switch>
          <HomeTemplate exact path="/courses" Component={Courses} /> 
          <HomeTemplate exact path="/details/:id" Component={Details} /> 
          <HomeTemplate exact path="/home" Component={Home} /> 
          <HomeTemplate exact path="/" Component={Home} /> 
          <AdminTemplate exact path="/admin/course-manage" Component={CourseManage} /> 
          <AdminTemplate exact path="/admin/user-manage" Component={UserManage} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
