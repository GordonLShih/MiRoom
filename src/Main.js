import "./Main.css";
import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Select from "react-select";
import { Routes, Route, Link } from "react-router-dom";

import topImg from "./images/topImg.png";
import jsonData from "./data.json";
// import Database from "./Database";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Main = () => {
  const ImagesBlock = () => {
    return (
      <div className="imageBlockContainer">
        <div className="fullImgBlock">
          <img className="imageBlockImg" src={jsonData.item1.img} />
          <p>產品名稱：{jsonData.item1.itemName}</p>
          <p>價錢：{jsonData.item1.price + "$"}</p>
          <button
            onClick={() => {
              alert("已加入");
            }}
          >
            加入購物車
          </button>
        </div>
        <div className="fullImgBlock">
          <img className="imageBlockImg" src={jsonData.item2.img} />
          <p>產品名稱：{jsonData.item2.itemName}</p>
          <p>價錢：{jsonData.item2.price + "$"}</p>
          <button
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

  const [selectedOption, setSelectedOption] = useState(null);

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
            <ImagesBlock />
            {false ? <ImagesBlock /> : null}

            <Select
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
