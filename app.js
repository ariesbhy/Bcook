const express = require("express");
const categories = require("./data");
const app = express(); //instance of express

app.use(express.json()); // recieve json info

//routes
app.get("/api/categories", (req, res) => {
  console.log(categories);
  res.status(200).json(categories);
});

app.post("/api/createCategory", (req, res) => {
  console.log(req.body);
  const newCategory = {
    categoryId: req.body.categoryId,
    categoryImage: req.body.categoryImage,
    categoryName: req.body.categoryName,
    categoryDescription: req.body.categoryDescription,
  };
  categories.push(newCategory);
  res.status(201).json({
    message: "Added Category!",
    data: categories,
  });
});

app.get("/api/category/;id", (rrq, res) => {
  const { id } = req.params;
  const category = categories.find((category) => {
    if (category.id == id) return true;
  });

  console.log(category);
});
app.listen(8025, () => {
  console.log("app is work on localhost 8025");
});
