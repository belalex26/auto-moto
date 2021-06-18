import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle  = {
  width: '431px',
  height: '271px'
}
 
export class Maps extends Component {

  render() {
    return (
      <Map 
        google={this.props.google}
        zoom={16}
        containerStyle={containerStyle}
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