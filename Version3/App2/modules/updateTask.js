import React from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';
import axios from 'axios';

  class UpdateTask extends React.Component{
    constructor(){
      super()
      this.state = {}
    }

    componentDidMount(){
      axios.get("/api/show/"+ window.location.pathname.split("/").slice(-1)[0]).then(res =>{
        this.setState(res.data)
      })
    }

    handleSubmit(event){
      console.log("submitting")
      event.preventDefault()
      axios.post("/api/update", this.state)
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
                    <textarea
                      className="materialize-textarea"
                      name="location"
                      value = {this.state.location}
                      onChange = {this.handleChange.bind(this)}>
                    </textarea>
                    <label>Where will this task will take place?</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="date"
                      class="datepicker"
                      name="date"
                      value = {this.state.date}
                      onChange = {this.handleChange.bind(this)}/>
                  </div>
                  <div className="input-field col s12 center">
                    <input type="Submit" className="waves-effect waves-light btn-large" value = "Submit your updated task"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }

  export default UpdateTask;