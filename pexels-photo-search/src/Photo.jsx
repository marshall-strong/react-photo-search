import React from "react";
import "./Photo.css";
import logo from "./logo.svg";

const Photo = ({ photoData }) => {
  if (!photoData) {
      return (
        <div className="Photo">
          <div>
            <p>Loading...</p>
            <img src={logo} alt="react logo" />
          </div>
        </div>
      );
  } else {
      return (
        <div className="Photo">
          <div>
              <a href={photoData.url}>
                <img src={photoData.src.medium} alt="alt text" />
              </a>
          </div>
        </div>
      );
  }
};

export default Photo;
