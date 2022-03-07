import "./App.css";
import React, { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import Main from "./Main";
import Cart from "./Cart";

const App = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path="/MiRoom" element={<Main />} />
        <Route path="/MiRoom/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
