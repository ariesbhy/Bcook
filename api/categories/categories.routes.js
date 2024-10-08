const express = require("express");
const categoriesRouter = express.Router();

categoriesRouter.get("/api/categories", (req, res) => {
  console.log(categories);
  res.status(200).json(categories);
});

categoriesRouter.post("/api/category", (req, res) => {
  let lenght = categories.length;
  let newId = categories[length - 1].id + 1;
  console.log(newId);
  console.log(req.body);
  const newCategory = {
    id: newId,
    image: req.body.image,
    name: req.body.name,
    description: req.body.description,
  };
  categories.push(newCategory);
  res.status(201).json({
    message: "Added Category!",
    data: categories,
  });
});

categoriesRouter.get("/api/category/:id", (rrq, res) => {
  const { id } = req.params;
  const category = categories.find((category) => {
    if (category.id == id) return true;
  });
  if (!category) {
    return res.status(404).json({ error: "category Not found" });
  } else {
    return res.status(200).json({ data: category });
  }
});
