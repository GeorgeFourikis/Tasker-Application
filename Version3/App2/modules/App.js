import React from 'react'
import NavLink from './NavLink'
import {browserHistory} from "react-router"

class App extends React.Component{
  handleLogOut(event) {
    event.preventDefault()
    localStorage.removeItem("token")
    browserHistory.push("/")
  }
  render() {
    const img = require('../public/images/background3.jpg');

    if(localStorage.getItem("token")){
      return (
        <div>
          <nav role="navigation">
            <div className="nav-wrapper container">
              <a id="logo-container" href="/" className="brand-logo">Talon Tasker</a>
              <ul className="right hide-on-med-and-down">
                <li><NavLink to="/create">Create a Task</NavLink></li>
                <li><NavLink to="/see">See all tasks</NavLink></li>
                <li><a onClick = {this.handleLogOut.bind(this)}>Logout</a></li>
              </ul>

              <ul id="nav-mobile" className="side-nav">
                <li><NavLink to="/create">Create a Task</NavLink></li>
                <li><NavLink to="/see">See all tasks</NavLink></li>
                <li><a onClick = {this.handleLogOut.bind(this)}>Logout</a></li>
              </ul>
              <a href="#" data-activates="nav-mobile" className="button-collapse">
                <i className="material-icons">menu</i>
              </a>
            </div>
          </nav>
          {this.props.children}
        </div>
    )
    }else{
      return (
        <div>
          <nav role="navigation">
            <div className="nav-wrapper container">
              <a id="logo-container" href="/" className="brand-logo">Talon Tasker</a>
              <ul className="right hide-on-med-and-down">
                <li><NavLink to="/register">Sign up</NavLink></li>
                <li><NavLink to="/login">Sign in</NavLink></li>
              </ul>

              <ul id="nav-mobile" className="side-nav">
                <li><NavLink to="/register">Sign up</NavLink></li>
                <li><NavLink to="/login">Sign in</NavLink></li>
              </ul>
              <a href="#" data-activates="nav-mobile" className="button-collapse">
                <i className="material-icons">menu</i>
              </a>
            </div>
          </nav>
          {this.props.children}
        </div>
    )
    }


  }
}


export default App