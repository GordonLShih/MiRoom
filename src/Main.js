import "./Main.css";
import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Select from "react-select";
import { Routes, Route, Link } from "react-router-dom";

import topImg from "./images/topImg.png";
import jsonData from "./data.json";
import Database from "./Database";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Main = () => {
  const [showDetail, setShowDetail] = useState(false);
  const ImagesBlock = (props) => {
    return (
      <div className="imageBlockContainer">
        <div className="fullImgBlock">
          <img className="imageBlockImg" src={Database(props.num).img} />
          {/* <label>產品名稱：{jsonData.item1.itemName}</label>*/}
          <label>產品名稱：{Database(props.num).itemName}</label>
          <label>價錢：{Database(props.num).price}$</label>
          <button
            className="label"
            onClick={() => {
              alert("已加入");
            }}
          >
            加入購物車
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="Container">
      <header className="Header">
        <BiMenu className="biMenu" color="#fff" />
        <b style={{ color: "#fff" }}>mi.room</b>
        <nav>
          <Link to="/MiRoom/cart">
            <GiShoppingCart className="giShoppingCart" color="#fff" />
          </Link>
        </nav>
        {/* <GiShoppingCart className="giShoppingCart" color="#fff" /> */}
      </header>
      <div className="mainBackground">
        <div className="mainBody">
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
            {[...Array(3)].map((x, i) => (
              <ImagesBlock num={i + 1} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer" />
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
