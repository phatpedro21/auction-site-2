import React from "react";
import ListingCard from "./ListingCard.jsx";

const ListingList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ListingCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ListingList;
