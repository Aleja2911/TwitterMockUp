import React from "react";
import Chicken from "../images/chicken.png"
import "./Header.css";

function Header () {
  //   &copy;
  return (
    <div className="main">
      <ul>
      <div className="Logo">
          <img src={Chicken} alt="chicken" width="30rem"></img>
      </div>
      <div className="name">
          <h2>TwitterClone</h2>
      </div>
      </ul>
    </div>
  );
}

export default Header
