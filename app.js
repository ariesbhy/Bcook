const express = require("express");
const app = express(); //instance of express

//routes
app.get("/categories", (req, res) => {
  console.log("categories");
});

app.listen(8025, () => {
  console.log("app is work on localhost 8020");
  return res.json("categories");
});
