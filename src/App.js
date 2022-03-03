import "./App.css";
import React, { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import Main from "./Main";
import Cart from "./Cart";

const App = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
