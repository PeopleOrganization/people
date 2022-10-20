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
              <h1 className="sidebarTitle">찾아보아요!</h1>
              <span align="center" className="hello">
                  헌혈카페는 아늑하고 편안한 공간으로 구성되어 친구들과 차도 마시고
                  <br></br>인터넷도 즐기며 편하게 쉬어갈 수 있는 헌혈+카페+문화의 공간입니다.
                </span>
                <hr />
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
