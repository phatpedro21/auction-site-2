import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ topCategories, filterByCategory }) => {
  return (
    <div>
      <h1>Auction Site</h1>
      <div href="#">My navbar</div>
      <button>Login</button>
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
