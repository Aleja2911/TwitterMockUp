import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


function Footer (props) {
  const footerItems = [
    "About us",
    "Help",
    "General terms",
    "Carrier",
     "copyright 2020 Twitter-Clone",
  ];

//   &copy;
  return (
    <div className  = "main">
      {/* <Link to="/about">About</Link> */}
      <ul>
        {footerItems.map((item) => (
          <li key={item}>
              <Link to={item}>
              {item}
              </Link>
            </li>    
        ))}
      </ul>
    </div>
  );
}

export default Footer
