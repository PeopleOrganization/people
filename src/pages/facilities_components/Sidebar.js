import React from "react";

function sidebar(props) {
  return (
    <div id="sidebarList2">
      <a className="href2" href="Facilities?blood=house">
        {" "}
        <li className={props.active.house}>헌혈의집</li>
      </a>
      &nbsp;
      <a className="href2" href="Facilities?blood=cafe">
        <li className={props.active.cafe}>헌혈카페</li>
      </a>
      &nbsp;
      <a className="href2" href="Facilities?blood=bank">
        <li className={props.active.bank}>혈액원</li>
      </a>
      &nbsp;
      <a className="href2" href="Facilities?blood=hospital">
        <li className={props.active.hospital}>지정병원</li>
      </a>
    </div>
  );
}

export default sidebar;