const express = require("express");
const {
  getAllCategories,
  createCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require("./categories.controller");
const categoriesRouter = express.Router();

categoriesRouter.get("/api/categories", getAllCategories);

categoriesRouter.post("/api/category", createCategory);

categoriesRouter.get("/api/category/:id", getOneCategory);

categoriesRouter.delete("/api/category/:id", deleteCategory);

categoriesRouter.put("/api/category/:id", updateCategory);

module.exports = categoriesRouter;
