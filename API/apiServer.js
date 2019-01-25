var express = require("express");
var db = require("./db");

const API = express();

API.get("/", (req, res) => {
  res.send("Hello Welcome to the API");
});

API.get("/items", (req, res) => {
  db.find({}, (err, docs) => {
    if (err) {
      res.send("Sorry something went wrong: ", err.message);
    } else {
      res.json(docs);
    }
  });
});

API.get("/items/:category", (req, res) => {
  db.find({ category: req.params.category }, (err, docs) => {
    if (err) {
      res.send("Sorry something went wrong: ", err.message);
    } else {
      res.json(docs);
    }
  });
});

API.listen(3030, () => {
  console.log("API up and running");
});
