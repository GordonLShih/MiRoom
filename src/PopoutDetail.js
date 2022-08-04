import "./Main.css";
import React, { useState, useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";

import Database from "./Database";

const PopoutDetail = (props) => {
  return (
    <div className="popOutContent">
      <FiX
        style={{
          width: 60,
          height: 60,
          color: "#000",
          cursor: "pointer",
          alignSelf: "flex-end",
          justifySelf: "flex-start",
        }}
        onClick={() => {
          // alert("trying to close");
          props.onClick();
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
          alignSelf: "center",
          justifyItems: "center",
          alignItem: "center",
          backgroundColor: "#fff",
          width: "80%",
        }}
      >
        <b style={{ color: "#000", fontSize: 60, alignSelf: "center" }}>
          {Database(props.num).itemName}
        </b>
        <b style={{ color: "#000", fontSize: 28 }}>
          {Database(props.num).detail}
        </b>
      </div>
    </div>
  );
};

export default PopoutDetail;
