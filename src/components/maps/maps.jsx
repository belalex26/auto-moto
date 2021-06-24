import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

const MAP_CENTER = {
  lat: 59.968453,
  lng: 30.322927
}

const LOCATION = {
  lat: 59.968218340759734,
  lng: 30.316518820624047
}

  function Maps() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={MAP_CENTER}
    >
      <Marker
        position={LOCATION}
      >
      </Marker>
    </GoogleMap>
  )
}
const WrappedMap = withScriptjs(withGoogleMap(Maps));
export default WrappedMap;