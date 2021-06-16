import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const Maps = () => {
    return (
    <Map google={this.props.google} zoom={14} />

    );
  };

export default GoogleApiWrapper({
    apiKey:"AIzaSyC08EhmP0VAmFx81zeuhFm1ZfTSzBKrQ30"
})(Maps);
