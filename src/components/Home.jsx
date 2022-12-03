import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Home.css";
import SideBar from "./SideBar";

function Home() {
  return (
    <div className="homeContainer">
      <div className="neg">
        <SideBar />
      </div>
      <div className="hyr"></div>
    </div>
  );
}

export default Home;
