import React from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';
import Iframe from 'react-iframe'
import {browserHistory} from "react-router"
import {Link} from 'react-router'
import {Navbar, NavItem} from 'react-materialize';
import moment from "moment"

class TaskMap extends React.Component{
    render(){
        let style = {marginBottom: 10}
        if (this.props.address){
            let baseUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCit5vlrsc2naYoM4-HqKM1TNevMRAlFBM&q="
            let newaddress = baseUrl + this.props.address.split(" ").join("+")
            return(
                <div style = {style}>
                    <Iframe
                      width="100%"
                      height = "30%"
                      position = 'relative'
                      frameborder="0" style="border:0"
                      url={newaddress} allowfullscreen/>
                </div>
            )
        } else {
            return( <div/> )
        }
    }

}

  class Task extends React.Component {
      constructor(props){
        super(props);
        this.title    = props.task.title;
        this.location = props.task.location;
        this.date     = moment(props.task.date).format("LL");
        this.starred  = props.task.starred;
        this.isCompleted = props.isCompleted;
      }

      render(){
        const starColor = (this.props.task.starred) ? "#039be5" : "#cecece"
        return(
          <li className="collection-item avatar">
               <span className="title"><b>My Task: </b>{this.title}</span>
               <p><b>It will take place: </b>{this.location}<br/>
                 <b>Date: </b>{this.date}
               </p>
               <TaskMap address = {this.location} />
               <a className="right"><i className="material-icons" value = {this.props.task._id}>info</i></a>
               <a className="right" onClick = {this.props.deleteTask}><i className="material-icons" value = {this.props.task._id}>delete</i></a>
               <span><a onClick = {this.props.starTask}><i className="material-icons" style = {{color: starColor}} value = {this.props.task._id} >star</i></a> </span>           
               <a onClick = {this.props.editTask}><i className="material-icons" value = {this.props.task._id} >mode_edit</i></a>  
          </li>

        )
      }
    }

    class TaskList extends React.Component {
      constructor(){
        super();
        this.state = {
          tasks: []
        };
        this.handleEdit = this.handleEdit.bind(this)
      }

      componentDidMount(){
        console.log("mounting Component")
        //use axios to get the data from the server
        axios.get('/api/index')
          .then(result => this.setState({ tasks: result.data }))
          .catch(error => console.log(error))
      }

      handleDelete(event) {
        const _id = event.target.getAttribute("value")
        axios.post('/api/delete', {_id})
          .then( (result) => {
            const newTasks = this.state.tasks.filter((task) => {
              return task._id !== _id
            })
            this.setState({tasks: newTasks})
          }) 
          .catch(err => console.log(err))
      }

      handleStar(event) {
        const _id = event.target.getAttribute("value");
        const taskId  = this.state.tasks.findIndex( task => task._id === _id)
        const changing = Object.assign({}, this.state.tasks[taskId])
        if(changing.starred == 1){  
          changing.starred = 0
        }else{
          changing.starred = 1
        }
        const newTasks = [...this.state.tasks]
        newTasks[taskId] =  changing  
        
        axios.post('/api/update', changing)
          .then( (result) => {
            this.setState({tasks: newTasks})
          }) 
          .catch(err => console.log(err))
      }

      handleEdit(event) {
        const _id = event.target.getAttribute("value");
        browserHistory.push("/update/" + _id)
      }

      render(){
        return(
          <div>
            <div className="row">
              <h3 className="center">My tasks</h3>
              <ul className="collection">
                {this.state.tasks.map((task) => <Task 
                                                  key = {task._id} 
                                                  task = {task} 
                                                  deleteTask = {this.handleDelete.bind(this)} 
                                                  starTask = {this.handleStar.bind(this)} 
                                                  editTask = {this.handleEdit.bind(this)} /> )} 
              </ul>
            </div>
              <div className="row center iconClass">
                <h4>Add a new task</h4> 
                <Link to="/create" activeClassName="active"><i className="large material-icons">add</i></Link>
              </div>
              <br />
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

export default TaskList;