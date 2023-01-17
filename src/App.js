import "./App.css";
import React, { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";

import Main from "./Main";
import Cart from "./Cart";
// import Test from "./Test";

const App = () => {
  return (
    <>
      <div className="topHeader">
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
      </div>
      <div className="routePadding" />
      <Routes>
        <Route path="/MiRoom" element={<Main />} />
        {/* <Route path="/MiRoom" element={<Test />} /> */}
        <Route path="/MiRoom/cart" element={<Cart />} />
      </Routes>
      <div className="footer" />
    </>
  );
};

export default App;
