import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import CreateTask from './modules/CreateTask';
import TaskList from './modules/seeTasks';
import SignUp from './modules/signUp';
import SignIn from './modules/signIn';
import LogOut from './modules/logOut';
import UpdateTask from './modules/updateTask';

    

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/create" component={CreateTask}/>
      <Route path="/update/:id" component={UpdateTask}/>
      <Route path="/register" component={SignUp}/>
      <Route path="/login" component={SignIn}/>
      <Route path="/logout" component={LogOut}/>
      <Route path="/see" component={TaskList}/>
    </Route>
  </Router>
), document.getElementById('app'))



 
