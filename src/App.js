import "./App.css";
import React, { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import Main from "./Main";
import Cart from "./Cart";
import Test from "./Test";

const App = () => {
  return (
    <Routes>
      <Route path="/MiRoom" element={<Main />} />
      {/* <Route path="/MiRoom" element={<Test />} /> */}
      <Route path="/MiRoom/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
