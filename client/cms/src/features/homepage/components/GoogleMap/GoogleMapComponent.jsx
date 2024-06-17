import React from "react";
import { LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  // const center = {
  //   lat: 10.616634728734757,
  //   lng: 103.53601298038821,
  // };

  return (
    <div className="map-container">
      {/* <LoadScript
        googleMapsApiKey="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Southwest+International+School" // Replace with your actual API key
      >
        <GoogleMap
          mapContainerStyle={{
            height: "250px",
            width: "100%",
          }}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript> */}
    </div>
  );
};

export default GoogleMapComponent;
