import Loading from './common/Loading/Loading';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import UserManage from './Components/layouts/admin/UserManage/UserManage';
import CourseManage from './Components/layouts/admin/CourseManage/CourseManage';
import Details from './pages/Details/Details';
import auth from './Components/layouts/admin/Auth/Auth';


import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
export const history = createBrowserHistory();

function App() {
  return (
    // <div className="App">
    //   <Loading />
    // </div>
    
    <Router history = {history}>
      <div className="App">
        <Switch>
          <HomeTemplate exact path="/courses" Component={Courses} /> 
          <HomeTemplate exact path="/details/:maKH" Component={Details} /> 
          <HomeTemplate exact path="/home" Component={Home} /> 
          <HomeTemplate exact path="/" Component={Home} /> 
          <HomeTemplate exact path="/login" Component={Login} /> 

          {(auth.isAuth()) ?
            <Fragment>
              <AdminTemplate exact path="/admin/course-manage" Component={CourseManage} /> 
              <AdminTemplate exact path="/admin/user-manage" Component={UserManage} /> 
              <AdminTemplate exact path="/admin" Component={CourseManage} />               
            </Fragment>
            :
            <Redirect to="/login" />
          }           


        </Switch>
      </div>
    </Router>
  );
}

export default App;
