import React from "react";
import District from "./district";
import { useState } from "react";

function Province2(props) {
  const [value, setValue] = useState(1);

  const provinces = [
    { id: 0, province: "---특별시, 광역시---" },
    { id: 1, province: "서울특별시" },
    { id: 2, province: "부산광역시" },
    { id: 3, province: "대구광역시" },
    { id: 4, province: "인천광역시" },
    { id: 5, province: "광주광역시" },
    { id: 6, province: "대전광역시" },
    { id: 7, province: "울산광역시" },
    { id: 8, province: "세종특별자치시" },
    { id: 9, province: "---------도--------" },
    { id: 10, province: "경기도" },
    { id: 11, province: "강원도" },
    { id: 12, province: "충청북도" },
    { id: 13, province: "충청남도" },
    { id: 14, province: "전라북도" },
    { id: 15, province: "전라남도" },
    { id: 16, province: "경상북도" },
    { id: 17, province: "경상남도" },
    { id: 18, province: "제주특별자치도" },
  ];

  return (
    <div>
      <select
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {provinces.map((item) => (
          <option key={item.id} value={item.id}>
            {item.province}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Province2;
