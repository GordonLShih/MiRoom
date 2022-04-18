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
      <header className="Header">
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
        {/* <GiShoppingCart className="giShoppingCart" color="#fff" /> */}
      </header>
      <div className="CartBodyBack">
        <div className="CartBody">
          <h1>This is cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
