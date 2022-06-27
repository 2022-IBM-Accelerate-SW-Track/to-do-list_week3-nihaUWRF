import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Niharika Bolukonda</div>
            <div className="brief_description">
            Greetings Everyone! My name is Niharika Bolukonda, and I am a rising senior at UW-River
            Falls. My hobbies are playing badminton, photography, and I pride to be a detail-oriented
            and organized person. The "ONE" ingredient I hate to add and eat in my food is onion.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
