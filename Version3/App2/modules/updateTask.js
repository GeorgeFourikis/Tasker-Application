import React from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';
import {browserHistory} from 'react-router'
  class UpdateTask extends React.Component{
    constructor(){
      super()
      this.state = {_id: window.location.pathname.split("/").slice(-1)[0]}
    }

    componentDidMount(){
      axios.get("/api/show/"+ window.location.pathname.split("/").slice(-1)[0]).then(res =>{
        console.log(res.data)
        this.setState(res.data[0])
      })
    }

    handleSubmit(event){
      console.log("submitting")
      event.preventDefault()
      axios.post("/api/update", this.state)
      .then((response) => {
        debugger
        browserHistory.push("/see")
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
              <h4>Update your Task</h4>
              <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      className="materialize-textarea"
                      name="title"
                      value = {this.state.title}
                      onChange = {this.handleChange.bind(this)}>
                    </textarea>
                    <label>Update your new Task</label>
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
                      className="datepicker"
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