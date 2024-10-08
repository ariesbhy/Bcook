const express = require("express");
const {
  getAllCategories,
  createCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require("./categories.controller");
const upload = require("../../middleware/multer");
const categoriesRouter = express.Router();

categoriesRouter.get(
  "/api/categories",
  (req, res, next) => {
    console.log("GETTING ALL CATEGORIES");
  },
  getAllCategories
);

categoriesRouter.post(
  "/api/category/:userId",
  upload.single("image"),
  createCategory
);

categoriesRouter.get("/api/category/:id", getOneCategory);

categoriesRouter.delete("/api/category/:id", deleteCategory);

categoriesRouter.put("/api/category/:id", updateCategory);

module.exports = categoriesRouter;
