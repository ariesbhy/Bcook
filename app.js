const express = require("express");
const categoriesRouter = require("./api/categories/categories.routes");
const connectDB = require("./database");
const dotenv = require("dotenv");
const PORT = process.env.PORT;
const app = express(); //instance of express

dotenv.config();
connectDB();
app.use(express.json()); // recieve json info
app.use("/api", categoriesRouter);

//routes

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
