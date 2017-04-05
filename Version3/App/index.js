import React , {PropTypes} from 'react'
import { render } from 'react-dom'
 
import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"
 
import iconMarker from "./assets/iconMarker.svg"
import iconMarkerHover from "./assets/iconMarkerHover.svg"
 
const MY_API_KEY = "AIzaSyD7GwNjshUsUlQVxYu7Z10LRq6jdpdNReE" 

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap

import Autocomplete from 'react-google-autocomplete';
 
<Autocomplete
    style={{width: '90%'}}
    onPlaceSelected={(place) => {
      console.log(place);
    }}
    types = {['(geocode)']}
/>


render(
  <Autocomplete />
  ,
  document.getElementById('root')
);

 
// const Map = ({googleMaps}) => (
//   // GoogleMap component has a 100% height style. 
//   // You have to set the DOM parent height. 
//   // So you can perfectly handle responsive with differents heights. 
//   <div className="map">
//     <GoogleMap
//       googleMaps={googleMaps}
//       // You can add and remove coordinates on the fly. 
//       // The map will rerender new markers and remove the old ones. 
//       coordinates={[
//         {
//           title: "Toulouse",
//           position: {
//             lat: 43.604363,
//             lng: 1.443363,
//           },
//           onLoaded: (googleMaps, map, marker) => {
//             // Set Marker animation 
//             marker.setAnimation(googleMaps.Animation.BOUNCE)
 
//             // Define Marker InfoWindow 
//             const infoWindow = new googleMaps.InfoWindow({
//               content: `
//                 <div>
//                   <h3>Toulouse<h3>
//                   <div>
//                     Toulouse is the capital city of the southwestern
//                     French department of Haute-Garonne,
//                     as well as of the Occitanie region.
//                   </div>
//                 </div>
//               `,
//             })
 
//             // Open InfoWindow when Marker will be clicked 
//             googleMaps.event.addListener(marker, "click", () => {
//               infoWindow.open(map, marker)
//             })
 
//             // Change icon when Marker will be hovered 
//             googleMaps.event.addListener(marker, "mouseover", () => {
//               marker.setIcon(iconMarkerHover)
//             })
 
//             googleMaps.event.addListener(marker, "mouseout", () => {
//               marker.setIcon(iconMarker)
//             })
 
//             // Open InfoWindow directly 
//             infoWindow.open(map, marker)
//           },
//         }
//       ]}
//       center={{lat: 43.604363, lng: 1.443363}}
//       zoom={8}
//       onLoaded={(googleMaps, map) => {
//         map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
//       }}
//     />
//   </div>
// )
 
// Map.propTypes = {
//   googleMaps: PropTypes.object.isRequired,
// }
 
// export default GoogleMapLoader(Map, {
//   libraries: ["places"],
//   key: MY_API_KEY
// })

// render(
//   <GoogleMap className = {"map"} />  ,
//   document.getElementById('root')
// );



// import React from 'react'
// import ReactDOM , { render } from 'react-dom'

// import Map from 'google-maps-react'
// import styles from './public/styles/app.css'

// const Contents = React.createClass({
//   getInitialState() {
//     return {
//       place: null,
//       position: null
//     }
//   },

//   onSubmit: function(e) {
//     e.preventDefault();
//   },

//   componentDidMount: function() {
//     this.renderAutoComplete();
//   },

//   componentDidUpdate(prevProps) {
//     const {google, map} = this.props;
//     if (map !== prevProps.map) {
//       this.renderAutoComplete();
//     }
//   },

//   renderAutoComplete: function() {
//     const {google, map} = this.props;

//     if (!google || !map) return;

//     const aref = this.refs.autocomplete;
//     const node = ReactDOM.findDOMNode(aref);
//     var autocomplete = new google.maps.places.Autocomplete(node);
//     autocomplete.bindTo('bounds', map);

//     autocomplete.addListener('place_changed', () => {
//       const place = autocomplete.getPlace();
//       if (!place.geometry) {
//         return;
//       }

//       if (place.geometry.viewport) {
//         map.fitBounds(place.geometry.viewport);
//       } else {
//         map.setCenter(place.geometry.location);
//         map.setZoom(17);
//       }

//       this.setState({
//         place: place,
//         position: place.geometry.location
//       })
//     })
//   },

//   render: function() {
//     const props = this.props;
//     const {position} = this.state;

//     return (
//       <div className={styles.flexWrapper}>
//         <div className={styles.left}>
//           <form onSubmit={this.onSubmit}>
//             <input
//               ref='autocomplete'
//               type="text"
//               placeholder="Enter a location" />
//             <input
//               className={styles.button}
//               type='submit'
//               value='Go' />
//           </form>
//           <div>
//             <div>Lat: {position && position.lat()}</div>
//             <div>Lng: {position && position.lng()}</div>
//           </div>
//         </div>
//         <div className={styles.right}>
//           <Map {...props}
//               containerStyle={{
//                 position: 'relative',
//                 height: '100vh',
//                 width: '100%'
//               }}
//               center={this.state.position}
//               centerAroundCurrentLocation={false}>
//                 <Marker position={this.state.position} />
//           </Map>
//         </div>
//       </div>
//     )
//   }
// })

// const MapWrapper = React.createClass({
//   render: function() {
//     const props = this.props;
//     const {google} = this.props;

//     return (
//       <Map google={google}
//           className={'map'}
//           visible={false}>
//             <Contents {...props} />
//       </Map>
//     );
//   }
// })

// export default MapWrapper
// render(
//   <MapWrapper />  ,
//   document.getElementById('root')
// );