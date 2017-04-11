import React from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';
import Iframe from 'react-iframe'

class TaskMap extends React.Component{
    render(){
        let style = {marginBottom: 10}
        if (this.props.address){
            let baseUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCit5vlrsc2naYoM4-HqKM1TNevMRAlFBM&q="
            let newaddress = baseUrl + this.props.address.split(" ").join("+")
            return(
                <div style = {style}>
                    <Iframe
                      width="50%"
                      height = "50%"
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
        this.date     = props.task.date;
        this.starred  = props.task.starred;
        this.isCompleted = props.isCompleted;
      }

      render(){
        const starColor = (this.props.task.starred) ? "#039be5" : "#cecece"
        return(
          <li className="collection-item avatar">
               <span className="title">{this.title}</span>
               <p>{this.location}<br/>
                 {this.date}
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
        //use axios to get the data from the server
        axiosGet('/api/index')
          .then(result => this.setState({ tasks: result.data }))
          .catch(error => console.log(error))
      }

      handleDelete(event) {
        const _id = event.target.getAttribute("value")
        axiosPost('/api/delete', {_id})
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
        
        axios.post('http://localhost:3000/api/update', changing)
          .then( (result) => {
            this.setState({tasks: newTasks})
          }) 
          .catch(err => console.log(err))
      }

      handleEdit(event) {
        const _id = event.target.getAttribute("value");
        window.location.replace("/update/" + _id)
      }

      render(){
        return(
          <div className="row">
            <h4>Your tasks</h4>
            <ul className="collection">
              {this.state.tasks.map((task) => <Task 
                                                key = {task._id} 
                                                task = {task} 
                                                deleteTask = {this.handleDelete.bind(this)} 
                                                starTask = {this.handleStar.bind(this)} 
                                                editTask = {this.handleEdit.bind(this)} /> )} 
            </ul>
          </div>
        )
      }
    }

export default TaskList;