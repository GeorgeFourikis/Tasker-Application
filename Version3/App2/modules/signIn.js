import React from 'react'
import NavLink from './NavLink'
import {browserHistory} from "react-router"


class SignIn extends React.Component{

  handleSubmit(event){
    // debugger
    event.preventDefault()
    //axios try logggin user in and console.log the token
    const username = event.target.elements.username.value
    const password = event.target.elements.password.value
    axios.post('/login', {username,password})
    .then((respose => {
      const token = respose.data.token
      if (token) {
        localStorage.setItem("token", token)
        browserHistory.push("/see")
      } else {
        alert("Check ur data noob!!")
      }
    }))
    .catch(console.log)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
            <div className="row">
              <h4 className="center">Login</h4>
              <form onSubmit = {this.handleSubmit.bind(this)} className="col s12">
                <div className="row">        
                  <div className="input-field col s12">
                    <input id="username" type="text"  name="username" className="validate" />
                    <label for="username"  data-error="wrong" data-success="right">username</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="password" type="password"  name="password" className="validate" />
                    <label for="password" data-error="wrong" data-success="right">Password</label>
                  </div>
                  <div className="input-field col s12 center">
                    <input type="submit" className="waves-effect waves-light btn-large" value="Submit" />
                    <a className="waves-effect waves-light btn-large pink" href="/register">Haven't registered yet?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <footer className="teal">
            <div className ="container">
              <div className ="row">
                <div className ="col l6 s12">
                  <h5 className ="white-text">Our Vision</h5>
                  <p className ="grey-text text-lighten-4">
                    We want to be able to provide something simple but not simplistic.Something
                    that would help everyone to organize his/her schedule and routine without
                    complex applications that need too much time to learn how to use it.
                  </p>
                </div>
                <div className ="col l6 s12">
                  <h5 className ="white-text">Information</h5>
                  <ul>
                    <li><a className ="white-text" href="#!">Contact us</a></li>
                    <li><a className ="white-text" href="#!">About us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className ="footer-copyright">
              <div className ="container">
              Made with <a className ="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
              Powered by <a className ="brown-text text-lighten-3" href="https://github.com/GeorgeFourikis">George Fourikis</a>
              </div>
            </div>
          </footer>
        </div>

    )
  }
}

export default SignIn

//action="http://localhost:3000/login" method="POST"