import "./Main.css";
import React, { useState, useRef, useEffect } from "react";
import Database from "./Database";
import PopoutDetail from "./PopoutDetail";

const ImagesBlock = (props) => {
  const [opacityNum, setOpacityNum] = useState("0");
  const [openDetail, setOpenDetail] = useState(false);

  // const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

  // useEffect(() => {
  //   if (openDetail == false) {
  //     document.body.style.overflow = "";
  //   } else {
  //     document.body.style.overflow = "hidden";
  //   }
  // }, [openDetail]);

  return (
    <>
      {openDetail ? (
        <PopoutDetail
          num={props.num}
          onClick={() => {
            setOpenDetail(false);
          }}
        />
      ) : null}
      {/* <PopoutDetail num={props.num} /> */}
      <div className="imageBlockContainer">
        {/* <div className="fullImgBlock"> */}
        {/* <img className="imageBlockImg" src={Database(props.num).img} /> */}

        <div
          style={{
            // width: "23.75%",
            width: "50%",
            aspectRatio: "0.7",
            // backgroundColor: "rgb(0, 0, 0)",
            backgroundImage: `url(${Database(props.num).img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              backgroundColor: `rgb(0, 0, 0, ${opacityNum})`,
              transition: "all .5s ease",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onMouseEnter={() => {
              setOpacityNum("0.7");
            }}
            onMouseLeave={() => {
              setOpacityNum("0");
            }}
            onClick={() => {
              // alert(`clicked${props.num}`);
              setOpenDetail(true);
            }}
          >
            <text
              style={{
                color: `rgb(255, 255, 255, ${opacityNum})`,
                transition: "all .5s ease",
                fontSize: 30,
                marginBottom: 15,
              }}
            >
              {Database(props.num).itemName}
            </text>
            <text
              style={{
                color: `rgb(255, 255, 255, ${opacityNum})`,
                transition: "all .5s ease",
                fontSize: 30,
              }}
            >
              {Database(props.num).price}$
            </text>
          </div>
        </div>

        {/* <label>產品名稱：{jsonData.item1.itemName}</label>*/}
        {/* <label>產品名稱：{Database(props.num).itemName}</label>
        <label>價錢：{Database(props.num).price}$</label> */}
        <button
          className="label"
          onClick={() => {
            alert("已加入");
          }}
        >
          加入購物車
        </button>
      </div>
    </>
  );
};

export default ImagesBlock;
