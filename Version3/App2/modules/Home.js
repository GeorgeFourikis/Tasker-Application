import React from 'react'
import NavLink from './NavLink'

class Home extends React.Component{
  render() {
    return (
      <div id="container">
      <main>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br /><br />
              <h1 className="header center teal-text text-lighten-2">Talon Tasker</h1>
              <div className="row center">
                <h4 className="header col s12 light">Schedule your tasks with Talon,never forget a task again.</h4>
              </div>
              <div className="row center">
                <a href="sign-up.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Start using it</a>
              </div>
              <br /><br />
              <div className="parallax"><img src={"/images/background3.jpg"} alt="Unsplashed background img 1" /></div>

            </div>
          </div>
        </div>

        <div id="container2">
          <div className="section">
              <div className="row">
                <div className="col s12 m12">
                  <div className="icon-block">
                    <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                    <h5 className="center">It will speed you up</h5>

                    <p className="light center">
                      We did most of the heavy lifting for you to provide a default stylings
                      that incorporate our custom components. Additionally, we refined animations and transitions
                      to provide a smoother experience for developers.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </main>
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


export default Home


       