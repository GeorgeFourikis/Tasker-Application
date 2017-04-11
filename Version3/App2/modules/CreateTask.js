import React from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';
import axios from 'axios';

  class CreateTask extends React.Component{
    constructor(){
      super()
      this.state = {}
    }

    handleSubmit(event){
      console.log("submitting")
      event.preventDefault()
      axios.post("http://localhost:3000/api/new", this.state)
      .then((response) => {
        window.location.replace("/see")
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    handleChange(event){
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
                    <input
                      type="date"
                      id = "date"
                      name="date"
                      value = {this.state.date}
                      onChange = {this.handleChange.bind(this)}/>
                  </div>
                  <div className="input-field col s12 center">
                    <input type="Submit" className="waves-effect waves-light btn-large" value = "Submit your task"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }

export default CreateTask;