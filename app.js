const express = require("express");
const categoriesRouter = require("./api/categories/categories.routes");
const connectDB = require("./database");
const dotenv = require("dotenv");
const PORT = process.env.PORT;
const morgan = require("morgan");
const cors = require("cors");
const notFoundHandler = require("./middleware/notFoundHandler");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const userRouter = require("./api/user/user.routes");
const app = express(); //instance of express

dotenv.config();
connectDB();
console.log(path.join(__dirname, "media"));

app.use(express.json()); // recieve json info
app.use(morgan("dev"));
app.use(cors());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api/categories", categoriesRouter);
app.use("/api/users", userRouter);

//middleware
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
