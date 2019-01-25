var nedb = require("nedb");
var fs = require("fs");

const items = [
  {
    id: 1,
    itemName: "Hi Fi",
    currentPrice: 100.99,
    category: "Electrical",
    auctionTimeRemaining: new Date("31 Feb 2019 11:12:05")
  },
  {
    id: 2,
    itemName: "Drum Kit",
    currentPrice: 140,
    category: "Instruments",
    auctionTimeRemaining: new Date("29 Feb 2019 11:12:05")
  },
  {
    id: 3,
    itemName: "Football Boots",
    currentPrice: 45.42,
    category: "Clothing",
    auctionTimeRemaining: new Date("11 Feb 2019 5:05:05")
  },
  {
    id: 4,
    itemName: "Keyboard",
    currentPrice: 80.5,
    category: "Instruments",
    auctionTimeRemaining: new Date("26 Feb 2019 11:12:05")
  },
  {
    id: 5,
    itemName: "Dark Side of the Moon CD",
    currentPrice: 8,
    category: "Music",
    auctionTimeRemaining: new Date("23 Feb 2019 11:12:05")
  },
  {
    id: 6,
    itemName: "Leather Duster",
    currentPrice: 80.04,
    category: "Clothing",
    auctionTimeRemaining: new Date("29 Feb 2019 11:12:05")
  },
  {
    id: 7,
    itemName: "Guitar",
    currentPrice: 34.34,
    category: "Instruments",
    auctionTimeRemaining: new Date("18 Feb 2019 11:12:05")
  }
];

class DB {
  constructor() {
    this.instance = new nedb({ filename: "./items", autoload: true });
    //If not already initiated with data, add some to the DB
    this.instance.find({}, (err, docs) => {
      if (!docs | (docs.length == 0)) {
        this.instance.insert(items);
      }
    });
    return this.instance;
  }
}

module.exports = new DB();
