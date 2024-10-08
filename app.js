const express = require("express");
const categories = require("./data");
const PORT = 8025;
const app = express(); //instance of express

app.use(express.json()); // recieve json info

//routes

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
