import React from 'react'
import NavLink from './NavLink'


class SignUp extends React.Component{
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <h4 className="center">Sign up</h4>
            <form action="http://localhost:3000/register" method="POST" className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input name="email" type="email" className="validate" />
                  <label for="email" data-error="wrong" data-success="right">Email</label>
                </div>            
                <div className="input-field col s12">
                  <input name="username" type="text" className="validate" />
                  <label for="username" data-error="wrong" data-success="right">Username</label>
                </div>
                <div className="input-field col s12">
                  <input name="password" type="password" className="validate" />
                  <label for="password" data-error="wrong" data-success="right">Password</label>
                </div>
                <div className="input-field col s12 center">
                  <input type="submit" className="waves-effect waves-light btn-large" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      )
  }
}

export default SignUp