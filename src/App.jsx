// App.js
import React from "react";
// import { BrowserRouter , Routes, Route } from "react-router-dom";

import Login from "./firebase/Login";
import Signup from "./firebase/Signup";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;