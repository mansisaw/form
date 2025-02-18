// App.js
import React from "react";
// import { BrowserRouter , Routes, Route } from "react-router-dom";

import Login from "./firebase/Login";
import Signup from "./firebase/Signup";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./firebase/Navbar";


const App = () => {
  return (
    <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;