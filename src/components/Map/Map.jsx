import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const Map = ({ data }) => {
  const { GOOGLE_MAPS_API_KEY } = process.env;
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const { lat, lng } = data
  const defaultCenter = { lat, lng };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};
