import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar.jsx";
import ListingList from "./components/ListingList.jsx";

//Dummy Data

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topCategories: ["Top Deals", "Electricals", "Sport"],
      items: [
        {
          id: 1,
          itemName: "Hi Fi",
          currentPrice: 100.99,
          auctionTimeRemaining: Date("11:19")
        },
        {
          id: 2,
          itemName: "Football boots",
          currentPrice: 65.0,
          auctionTimeRemaining: Date("5:19")
        },
        {
          id: 3,
          itemName: "Lawnmower",
          currentPrice: 10.1,
          auctionTimeRemaining: Date("4:11:19")
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Navbar topCategories={this.state.topCategories} />
        <ListingList items={this.state.items} />
      </div>
    );
  }
}

console.log("in jsx>");
ReactDOM.render(<Main />, app);
