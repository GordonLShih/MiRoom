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
  // const ImagesBlock = (props) => {
  //   const [opacityNum, setOpacityNum] = useState("0");
  //   return (
  //     <div className="imageBlockContainer">
  //       {/* <div className="fullImgBlock"> */}
  //       {/* <img className="imageBlockImg" src={Database(props.num).img} /> */}
  //       <div
  //         style={{
  //           // width: "23.75%",
  //           width: "50%",
  //           aspectRatio: "0.7",
  //           // backgroundColor: "rgb(0, 0, 0)",
  //           backgroundImage: `url(${Database(props.num).img})`,
  //           backgroundSize: "cover",
  //           backgroundPosition: "center",
  //         }}
  //       >
  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             width: "100%",
  //             height: "100%",
  //             backgroundColor: `rgb(0, 0, 0, ${opacityNum})`,
  //             transition: "all .5s ease",
  //             justifyContent: "center",
  //             alignItems: "center",
  //             cursor: "pointer",
  //           }}
  //           onMouseEnter={() => {
  //             setOpacityNum("0.7");
  //           }}
  //           onMouseLeave={() => {
  //             setOpacityNum("0");
  //           }}
  //           onClick={() => {
  //             alert(`clicked${props.num}`);
  //           }}
  //         >
  //           <text
  //             style={{
  //               color: `rgb(255, 255, 255, ${opacityNum})`,
  //               transition: "all .5s ease",
  //               fontSize: 30,
  //               marginBottom: 15,
  //             }}
  //           >
  //             {Database(props.num).itemName}
  //           </text>
  //           <text
  //             style={{
  //               color: `rgb(255, 255, 255, ${opacityNum})`,
  //               transition: "all .5s ease",
  //               fontSize: 30,
  //             }}
  //           >
  //             {Database(props.num).price}$
  //           </text>
  //         </div>
  //       </div>

  //       {/* <label>產品名稱：{jsonData.item1.itemName}</label>*/}
  //       {/* <label>產品名稱：{Database(props.num).itemName}</label>
  //       <label>價錢：{Database(props.num).price}$</label> */}
  //       <button
  //         className="label"
  //         onClick={() => {
  //           alert("已加入");
  //         }}
  //       >
  //         加入購物車
  //       </button>
  //       {/* <div className="popOutContent" /> */}
  //     </div>
  //     // </div>
  //   );
  // };

  return (
    <div className="Container">
      <div className="topHeader">
        <BiMenu className="biMenu" color="#fff" />
        <b style={{ color: "#fff" }}>mi.room</b>
        <nav>
          <Link to="/MiRoom/cart">
            <GiShoppingCart className="giShoppingCart" color="#fff" />
          </Link>
        </nav>
      </div>
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
