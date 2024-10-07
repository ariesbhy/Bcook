const express = require("express");
const app = express(); //instance of express

//routes
app.get("/categories", (req, res) => {});
app.listen(8020, () => {
  console.log("app is work on localhost 8020");
});
