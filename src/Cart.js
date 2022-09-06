import "./Cart.css";
import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Select from "react-select";
import { Routes, Route, Link } from "react-router-dom";

import CartData from "./Cart.json";
import * as fs from "fs";

const Cart = () => {
  useEffect(() => {
    console.log(CartData);
  }, []);

  return (
    <div className="Container">
      <div className="CartBodyBack">
        <div className="CartBody">
          <div className="title">
            <i className="titleP">This is cart</i>
            <i>
              {CartData.name} x {CartData.quality}
            </i>
            <i>Your total is {CartData.quality * CartData.itemPrice}$</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
