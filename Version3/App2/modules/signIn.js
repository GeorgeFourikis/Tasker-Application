import React from 'react'
import NavLink from './NavLink'


class SignIn extends React.Component{
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
          <h4 className="center">Login</h4>
            <form action="http://localhost:3000/login" method="POST" className="col s12">
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
      </div>
    )
  }
}

export default SignIn