import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";


export default function footer(props, match) {
  const footerItems = [
    "About us",
    "Help",
    "General terms",
    "Carrier",
     "copyright 2020 Twitter-Clone",
  ];

//   &copy;
  return (
    <div>
      {/* <Link to="/about">About</Link> */}
      <ul>
        {footerItems.map((item) => (
          <li>
              <Link key={item}>
              {item}
              </Link>
            </li>
          
        ))}
      </ul>
    </div>
  );
}
