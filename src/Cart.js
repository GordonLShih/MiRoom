import "./Cart.css";
import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Select from "react-select";
import { Routes, Route, Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="Container">
      {/* <h1>This is Cart page</h1>
      <Link to="/MiRoom">Back</Link> */}
      {/* <header className="Header">
        <BiMenu className="biMenu" color="#fff" />
        <nav>
          <Link to="/MiRoom">
            <b style={{ color: "#fff" }}>mi.room</b>
          </Link>
        </nav>
        <nav>
          <Link to="/MiRoom/cart">
            <GiShoppingCart className="giShoppingCart" color="#fff" />
          </Link>
        </nav>
      </header> */}
      <div className="CartBodyBack">
        <div className="CartBody">
          <h1>This is cart</h1>
          {/* <div
            style={{
              backgroundColor: "blue",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "red" }}>123</h1>
          </div> */}

          <div
            style={{
              width: "700px",
              height: "1400px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "600px",
                height: "450px",
                backgroundColor: "grey",
                borderRadius: "220px",
                marginBottom: "50px",
                border: "1px solid rgba(0, 0, 0)",
              }}
            >
              220
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "600px",
                height: "450px",
                backgroundColor: "grey",
                borderRadius: "200px",
                border: "1px solid rgba(0, 0, 0)",
              }}
            >
              200
            </div>
          </div>
          <div
            style={{ width: "50%", aspectRatio: 0.7, backgroundColor: "pink" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
