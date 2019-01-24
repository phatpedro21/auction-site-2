import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ topCategories }) => {
  return (
    <div>
      <h1>Auction Site</h1>
      <div href="#">My navbar</div>
      <ul>
        {topCategories.map((cat, index) => (
          <li key={index}>
            <a href="#">{cat}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* 
  Navbar.PropTypes = {
    topCategories: PropTypes.array(
      PropTypes.string.isRequired
    ).isRequired
  }
*/

export default Navbar;
