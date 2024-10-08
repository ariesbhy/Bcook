const mongoose = require("mongoose");

const connectDB = async () => {
  const connectDB = await mongoose.connect(
    "mongodb+srv://basmahfarhan97:Basmah97@categories.wt8x2.mongodb.net/"
  );
  console.log("Connected to mongooseDB");
};

module.exports = connectDB;
