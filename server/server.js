import express from "express";

const App = express();

App.get("/", (req, res) => {
  res.render("./../app/index.ejs", {});
})
  .use(express.static("build"))
  .use(express.static("/app/css"));

App.listen(7777, () => {
  console.log("up and running");
});
