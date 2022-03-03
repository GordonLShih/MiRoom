import "./App.css";
import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Select from "react-select";
import { Routes, Route, Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="Container">
      <h1>This is Cart page</h1>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Cart;
