import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar.jsx";
import ListingList from "./components/ListingList.jsx";
import fetch from "fetch";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx';
import ListingPage from './components/ListingPage.jsx';

//Dummy Data

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topCategories: ["Instruments", "Electrical", "Clothing"],
      items: [],
    }
    fetch.fetchUrl(
      "http://localhost:3030/items",
      (error, meta, body) => {
        if (error) {
          console.log("Fetching error", error);
        } else {
          this.setState(prevState => {
            const newState = prevState;
            newState.items = JSON.parse(body);
            return newState;
          });
        }

      }
    );
  }

  filterByCategory = category => {
    console.log("Fetching by cat")
    fetch.fetchUrl(
      "http://localhost:3030/items/" + category,
      (error, meta, body) => {
        if (error) {
          console.log("Fetching error", error);
        } else {
          this.setState(prevState => {
            const newState = prevState;
            newState.items = JSON.parse(body);
            return newState;
          });
        }
      }
    );
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar
          />
          <Route exact path="/" render={() => (<Home filterByCategory={this.filterByCategory} {...this.state} />)} />
          <Route path="/listing/:id" render={() => (<ListingPage />)} />
        </div>
      </Router>
    );
  }
}

console.log("in jsx>");
ReactDOM.render(<Main />, app);
