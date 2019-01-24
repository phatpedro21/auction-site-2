import React from "react";

const listing = {
  margin: "40px",
  border: "5px solid darkblue",
  backgroundColor: "lightblue"
};

const Listing = ({ item }) => {
  {
    console.log("returning a listing: ", item);
  }
  return (
    <li key={item.key} style={listing}>
      <h1>{item.itemName}</h1>
      <div>{item.currentPrice}</div>
      <div>{item.auctionTimeRemaining} s</div>
    </li>
  );
};

export default Listing;
