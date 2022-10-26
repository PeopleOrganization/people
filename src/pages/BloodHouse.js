//구글맵키 AIzaSyBIgZoVqTFMhUuZj2l0bFRkQsPoXWRVFI0
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function BloodHouse(props) {
  const mapElement = useRef(null);
  const [list, setList] = useState([]);
  const [googlemap, setGooglemap] = useState();
  const [resData, setResData] = useState();

  function geo() {
    //동기 처리로 위치정보 세팅 후 구글맵을 띄우도록 함
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("위도 : " + position.coords.latitude);
        console.log("경도: " + position.coords.longitude);
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        resolve(location);
      });
    });
    return promise;
  }

  function goAddress(address) {
    resData.forEach((data) => {
      if (data.address === address) {
        googlemap.setCenter({ lat: data.lat, lng: data.long });
        googlemap.setZoom(17);
      }
    });
  }

  // 컴포넌트가 마운트될 때, 수동으로 스크립트를 넣어줍니다.
  // ﻿이는 script가 실행되기 이전에 window.initMap이 먼저 선언되어야 하기 때문입니다.
  const loadScript = useCallback((url) => {
    const firstScript = window.document.getElementsByTagName("script")[0];
    const newScript = window.document.createElement("script");
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  // script에서 google map api를 가져온 후에 실행될 callback 함수
  const initMap = useCallback(async () => {
    const { google } = window;
    if (!mapElement.current || !google) return;
    const location = await geo();
    const map = new google.maps.Map(mapElement.current, {
      zoom: 17,
      center: location,
    });
    const marker = new google.maps.Marker({
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      },
      position: location,
      map,
    });
    //현재위치 마커
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent("<h3>현재위치</h3>");
      infoWindow.open(map, marker);
    });

    const infoWindow = new google.maps.InfoWindow();
    axios
      .get("http://localhost:3001/bloodhouse")
      .then((res) => {
        setResData(res.data);
        res["data"].forEach((loc) => {
          try {
            //각 시설 마커
            const bhmarker = new google.maps.Marker({
              position: { lat: loc["lat"], lng: loc["long"] },
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              },
              map,
            });
            //마커 클릭시 설명 띄우기
            bhmarker.addListener("click", () => {
              infoWindow.close();
              infoWindow.setContent(
                `전화번호 : ${loc["tel"]}<br>주소 : ${loc["address"]}`
              );
              infoWindow.open(map, bhmarker);
            });
          } catch (err) {
            console.log(err);
          }
        });
        return { data: res["data"], gmap: map };
      })
      .then((res) => {
        setGooglemap(res.gmap);
        return res.data.map((loc) => {
          const element = loc["address"];
          if (element !== undefined) return element;
          else return "undefined";
        });
      })
      .then((res) => {
        setList(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const script = window.document.getElementsByTagName("script")[0];
    const includeCheck = script.src.startsWith(
      "https://maps.googleapis.com/maps/api"
    );

    // script 중복 호출 방지
    if (includeCheck) return initMap();

    window.initMap = initMap;
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBIgZoVqTFMhUuZj2l0bFRkQsPoXWRVFI0&callback=initMap&language=en"
    );
  }, [initMap, loadScript]);

  return (
    <div id="bigContainer">
      <div id="sideLeft">
        <ul className="sidebarList2">
          <a className="href2" href="BloodHouse">
            {" "}
            <li className="sidebarListItem2 active">헌혈의집</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodCafe">
            <li className="sidebarListItem2">헌혈카페</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodBank">
            <li className="sidebarListItem2">혈액원</li>
          </a>
          &nbsp;
          <a className="href2" href="BloodHospital">
            <li className="sidebarListItem2">지정병원</li>
          </a>
          <br></br>
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </ul>
      </div>

      <div className="container">
        <h1 className="sidebarTitle">찾아보아요!</h1>
        <span align="center" className="hello">
          헌혈의 집이란 사람들이 찾아가 헌혈을 하는 곳으로, 안정적으로 혈액을
          공급받고
          <br /> 혈액 자급률을 높이기 위해 대한적십자사에서 각 지역에 설치한
          곳입니다.
        </span>
        <hr />
        <div className="others">
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={list}
              onChange={(event, newValue) => {
                goAddress(newValue);
              }}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="헌혈의 집" />
              )}
            />
          </div>
          <br></br><br></br>
          <div id="mapT">
            <div id="hosMap" ref={mapElement} style={{ minHeight: "600px" }} />
          </div>
        </div>
        <br></br><br></br><br></br>
      </div>
    </div>
  );
}

export default BloodHouse;
