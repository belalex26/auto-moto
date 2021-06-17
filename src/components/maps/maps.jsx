import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class Maps extends Component {
  render() {
    return (
      <Map 
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 59.968218340759734,
          lng: 30.316518820624047
        }}
      >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAKjnwzo8sTCSyACyaKuJTA280vPo5vft0')
})(Maps)