import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";

function BloodHouse() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(position) {
    console.log("위도 : " + position.coords.latitude);
    console.log("경도: " + position.coords.longitude);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{
        width: "70%",
        marginLeft: "250px",
        marginTop: "100px",
        height: "500px",
      }}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}

export default BloodHouse;
