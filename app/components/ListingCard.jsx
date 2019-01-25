import React from "react";
import { Link } from 'react-router-dom';
import numeral from "numeral";

const listing = {
  margin: "40px",
  border: "5px solid darkblue",
  backgroundColor: "lightblue"
};

const ListingCard = ({ item }) => {
  {
    console.log("returning a listing: ", item);
  }
  return (
    <li key={item.id} style={listing}>
      <h1>
        <Link to={`/listing/${item.id}`}>{item.itemName}</Link>
      </h1>
      <div>Current Price: £{numeral(item.currentPrice).format(0.0)}</div>
      <div>Auction Finishes on : {item.auctionTimeRemaining} s</div>
      <Link to={`/listing/${item.id}`}>View Item</Link>
    </li >
  );
};

export default ListingCard;
