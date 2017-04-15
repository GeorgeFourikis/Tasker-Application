import React from 'react'
import NavLink from './NavLink'


class SignUp extends React.Component{

  handleSubmit(event){
    event.preventDefault()
    // debugger
    const username = event.target.elements.username.value
    const email    = event.target.elements.email.value
    const password = event.target.elements.password.value
    axios.post('/register', {username,password,email})
    .then((respose => {
      const token = respose.data.token
      if (token) localStorage.setItem("token", token)
    }))
    .catch(console.log)
  }



  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <h4 className="center">Sign up</h4>
            <form onSubmit = {this.handleSubmit.bind(this)} className="col s12">
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

export default SignUp