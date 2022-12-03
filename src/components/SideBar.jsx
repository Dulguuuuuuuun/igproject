import React from "react";
import "./SideBar.css";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

function SideBar() {
  return (
    <div className="sideBarContainer">
      <img className="logo" src={require("../assets/IG.png")} alt="" />
      <div className="navContainer">
        <div className="nav">
          {" "}
          <AiFillHome /> Home
        </div>
        <div className="nav">
          <BsSearch />
          Search
        </div>
        <div className="nav">
          <MdOutlineExplore /> Explore
        </div>
        <div className="nav">
          <AiFillInstagram /> Reels
        </div>
        <div className="nav">
          <AiOutlineHeart /> Notifications
        </div>
        <div className="nav">
          <AiOutlinePlusSquare /> Create
        </div>
        <div className="nav">
          <RxAvatar />
          Profile{" "}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
