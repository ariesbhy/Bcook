const express = require("express");
const { default: categories } = require("./data");
const app = express(); //instance of express

//routes
app.get("/api/categories", (req, res) => {
  res.json(categories);
});

app.listen(8025, () => {
  console.log("app is work on localhost 8020");
});
