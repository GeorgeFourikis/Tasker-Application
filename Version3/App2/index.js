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
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import CreateTask from './modules/CreateTask';
import TaskList from './modules/seeTasks';
import SignUp from './modules/signUp';
import SignIn from './modules/signIn';
import LogOut from './modules/logOut';
import UpdateTask from './modules/updateTask';

    

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/create" component={CreateTask}/>
      <Route path="/update/:id" component={UpdateTask}/>
      <Route path="/register" component={SignUp}/>
      <Route path="/login" component={SignIn}/>
      <Route path="/logout" component={LogOut}/>
      <Route path="/see" component={TaskList}/>
    </Route>
  </Router>
), document.getElementById('app'))



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

 
