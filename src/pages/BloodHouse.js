import { Map, MapMarker } from "react-kakao-maps-sdk";
import useGeolocation from "react-hook-geolocation";

function BloodHouse(){
  return (
    <Map 
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{width: "70%", marginLeft:"250px",marginTop:"100px",height: "500px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
  )
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(position) {
    console.log('위도 : ' + position.coords.latitude); 
    console.log('경도: ' + position.coords.longitude);
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  
  
  navigator.geolocation.getCurrentPosition(success, error, options);
export default BloodHouse;
