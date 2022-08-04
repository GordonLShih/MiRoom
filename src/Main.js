import "./Main.css";
import React, { useState, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
// import Select from "react-select";
import { Link } from "react-router-dom";

import topImg from "./images/topImg.png";
// import jsonData from "./data.json";
import ImagesBlock from "./ImagesBlock";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Main = () => {
  return (
    <div className="Container">
      <div className="MainBodyBack">
        <div className="MainBody">
          <img className="topImage" src={topImg} alt="topImage" />
          <div className="midTitle">
            <i>Mi casa es tu casa</i>
          </div>
          <div className="horizontalLine" />
          <div className="verticalLine" />
          <div className="contentBox">
            {/* <ImagesBlock num={1} />
            <ImagesBlock num={2} />
            <ImagesBlock num={3} /> */}
            {[...Array(4)].map((x, i) => (
              <ImagesBlock num={i + 1} />
            ))}
            {/* <div className="popOutContent" >
              <image src=""/>
            </div> */}
            {/* <div className="popOutContent">
              <b style={{ color: "#000", fontSize: 60 }}>this is item</b>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
{
  /* <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
            <button
              onClick={() => {
                // alert(selectedOption);
                if (selectedOption === null) {
                  alert("沒有做選擇");
                } else {
                  alert(selectedOption.value);
                }
                // console.log(selectedOption.value);
              }}
            >
              確認
            </button> */
}
