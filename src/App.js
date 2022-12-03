import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
