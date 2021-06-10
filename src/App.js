import Loading from './common/Loading/Loading';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import UserManage from './Components/layouts/admin/UserManage/UserManage';
import CourseManage from './Components/layouts/admin/CourseManage/CourseManage';
import Details from './pages/Details/Details';

import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
export const history = createBrowserHistory();

function App() {
  return (
    <Router history = {history}>
      <div className="App">
        <Switch>
          <Route exact path="/courses" component={Courses} /> 
          <Route exact path="/home" component={Home} /> 
          <Route exact path="/" component={Home} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
