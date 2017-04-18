import React from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';
import {browserHistory} from "react-router"

import DatePicker from "react-datepicker"
import moment from "moment"
  class CreateTask extends React.Component{
    constructor(){
      super()
      this.state = {}
      this.date = moment()
    }

    handleSubmit(event){
      console.log("submitting")
      event.preventDefault()
      axios.post("/api/new", this.state)
      .then((response) => {
        browserHistory.push("/see")
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    handleChange(event){
      if (event._isAMomentObject) {
        event.target = {}
        event.target.name = "date"
        event.target.value = event.format('LL')
        this.date = event
      }
      this.setState({[event.target.name]: event.target.value})
    }

    render(){
      const self = this
      const selectAddress = ({formatted_address}) => {
        self.setState({"location": formatted_address})
      }
      return(
        <div className="container">
          <div className="section">
            <div className="row">
              <h4>Create a new Task</h4>
              <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      className="materialize-textarea"
                      name="title"
                      value = {this.state.title}
                      onChange = {this.handleChange.bind(this)}>
                    </textarea>
                    <label>Type your new Task</label>
                  </div>
                  <div className="input-field col s12">
                    <Autocomplete
                      className="materialize-textarea"
                      onPlaceSelected={selectAddress}
                      types = {['geocode']}
                    />
                    
                  </div>
                  <div className="input-field col s12">
                    <DatePicker
                        selected={this.date}
                        onChange={this.handleChange.bind(this)}
                    />
                  </div>
                  <div className="input-field col s12 center">
                    <input type="Submit" className="waves-effect waves-light btn-large" value = "Submit your task"/>
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

export default CreateTask;