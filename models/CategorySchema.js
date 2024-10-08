const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  id: { type: Number },
  name: { type: String },
  description: { type: String },
});

module.exports = model("Category", CategorySchema);
