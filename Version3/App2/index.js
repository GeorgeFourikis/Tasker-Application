// import React , {PropTypes} from 'react'
// import { render } from 'react-dom'
 
// import GoogleMap from "react-google-map"
// import GoogleMapLoader from "react-google-maps-loader"
 
// import iconMarker from "./assets/iconMarker.svg"
// import iconMarkerHover from "./assets/iconMarkerHover.svg"
 
// const MY_API_KEY = "AIzaSyD7GwNjshUsUlQVxYu7Z10LRq6jdpdNReE" 

// // Wrap all `react-google-maps` components with `withGoogleMap` HOC
// // and name it GettingStartedGoogleMap

// import Autocomplete from 'react-google-autocomplete';
 
// <Autocomplete
//     style={{width: '90%'}}
//     onPlaceSelected={(place) => {
//       console.log(place);
//     }}
//     types = {['(geocode)']}
// />


// render(
//   <Autocomplete />,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';

  class CreateTask extends React.Component{
    constructor(){
      super()
      this.state = {}
    }

    handleSubmit(event){
      console.log("submitting")
      event.preventDefault()
      axios.post("/api/new", this.state)
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



ReactDOM.render(
  <CreateTask/>,
  document.getElementById('root')
);

// const coords = {
//   lat:  -34.603722,
//   lng: -58.381592
// };

// const params = {v: '3.exp', key: 'AIzaSyD7GwNjshUsUlQVxYu7Z10LRq6jdpdNReE'};

// const App = React.createClass({

//   onMapCreated(map) {
//     map.setOptions({
//       disableDefaultUI: true
//     });
//   },

//   onDragEnd(e) {
//     console.log('onDragEnd', e);
//   },

//   onCloseClick() {
//     console.log('onCloseClick');
//   },

//   onClick(e) {
//     console.log('onClick', e);
//   },

//   render() {
//     return (
//       <Gmaps
//         width={'600px'}
//         height={'600px'}
//         lat={coords.lat}
//         lng={coords.lng}
//         zoom={12}
//         loadingMessage={'Be happy'}
//         params={params}
//         onMapCreated={this.onMapCreated}>
//         <Marker
//           lat={coords.lat}
//           lng={coords.lng}
//           draggable={true}
//           onDragEnd={this.onDragEnd} />
//         <InfoWindow
//           lat={coords.lat}
//           lng={coords.lng}
//           content={'I am here bitches! :)'}
//           onCloseClick={this.onCloseClick} />
//         <Circle
//           lat={coords.lat}
//           lng={coords.lng}
//           radius={200}
//           onClick={this.onClick} />
//       </Gmaps>
//     );
//   }

// });

// ReactDOM.render(<App />,
//  document.getElementById('app')
//  );

 
