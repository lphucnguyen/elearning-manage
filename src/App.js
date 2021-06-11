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
          <HomeTemplate exact path="/home" Component={Home} /> 
          <HomeTemplate exact path="/" Component={Home} /> 
          <AdminTemplate exact path="/admin" Component={CourseManage} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
