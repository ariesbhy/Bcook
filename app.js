const express = require("express");
const categoriesRouter = require("./api/categories/categories.routes");
const PORT = 8025;
const app = express(); //instance of express

app.use(express.json()); // recieve json info
app.use("/api", categoriesRouter);

//routes

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
