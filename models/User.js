const { Schema, model } = require("mongoose");
const categories = require("../data");

const User = new Schema({
  id: { type: Number },
  image: { type: String },
  name: { type: String },
  ingredients: { type: String },
  categories: [{ type: Schema.Types.ObjectId, ref: "categories" }],
});

module.exports = model("User", UserSchema);
