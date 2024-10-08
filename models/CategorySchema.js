const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  id: { type: Number },
  image: { type: String },
  name: { type: String },
  description: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Category", CategorySchema);
