import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";

function BloodCafe() {
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
    <div className="centerContainer">
      <div className="container">
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h1 className="sidebarTitle">지도</h1>
              <ui className="sidebarCircle">
                <ul className="sidebarList">
                  <a className="href" href="BloodHouse">
                    {" "}
                    <li className="sidebarListItem">헌혈의집</li>
                  </a>
                  &nbsp;
                  <a className="href" href="BloodCafe">
                    <li className="sidebarListItem active">헌혈카페</li>
                  </a>
                  &nbsp;
                  <a className="href" href="BloodBank">
                    <li className="sidebarListItem">혈액원</li>
                  </a>
                  &nbsp;
                  <a className="href" href="BloodHospital">
                    <li className="sidebarListItem">지정병원</li>
                  </a>
                </ul>
              </ui>
            </div>
          </div>
        </div>
        <div className="others"></div>
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
      </div>
    </div>
  );
}

export default BloodCafe;
