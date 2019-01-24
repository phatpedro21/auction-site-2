import React from "react";
import Listing from "./Listing.jsx";

const ListingList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <Listing item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ListingList;
