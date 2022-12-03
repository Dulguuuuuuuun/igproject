import React from "react";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { CiSettings } from "react-icons/ci";

function Profile() {
  return (
    <div className="profileContainer">
      <div className="">
        <div className="logoAndTitle">
          <div className="avatar"></div>
          <div className="title">
            <h1>dulguun_0601</h1>
            <Button variant="outline-dark">Edit profile</Button>
            <CiSettings className="icon" />
          </div>
        </div>
        <div className="text">
          <p>3 posts</p>
          <p>69k followers</p>
          <p>0 following</p>
        </div>
        <div className="highlight">
          <div className="s"></div>
          <div className="s"></div>
          <div className="s"></div>
        </div>
        <hr />
        <div className="post">
          <div className="posts"></div>
          <div className="posts"></div>
          <div className="posts"></div>
          <div className="posts"></div>
          <div className="posts"></div>
        </div>
        <div className="footer">
          <div className="text">
            <a href="">Meta</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Jobs</a>
            <a href="">Helps</a>
            <a href="">API</a>
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Top Account</a>
            <a href="">Hashtag</a>
            <a href="">Locations</a>
            <a href="">Instagram Lite</a>
            <a href="">Contact & Non-Users</a>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Profile;
